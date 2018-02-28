const requireLogin = require('../middlewares/requireLogin')
const keys = require('../config/keys')
const plaid = require('plaid')
const moment = require('moment')
const mongoose = require('mongoose')
const Profile = mongoose.model('profile')
const Goal = mongoose.model('goal')
const Week = mongoose.model('goal')
const Outflow = mongoose.model('outflow')

const plaidClientId = keys.plaidClientId
const plaidSecret = keys.plaidSecret
const plaidPublic = keys.plaidPublic
const plaidEnv = keys.plaidEnv

// Initialize Plaid client
var client = new plaid.Client(
  plaidClientId,
  plaidSecret,
  plaidPublic,
  plaid.environments[plaidEnv]
)

module.exports = app => {
  // Get access token from Plaid
  app.post('/api/get_access_token', requireLogin, async (req, res, next) => {
    publicToken = req.body.public_token
    await client.exchangePublicToken(
      publicToken,
      async (error, tokenResponse) => {
        if (error != null) {
          var msg = 'Could not exchange public_token!'
          console.log(msg + '\n' + error)
          return res.json({
            error: msg
          })
        }
        accessToken = tokenResponse.access_token
        itemId = tokenResponse.item_id
        console.log('Access Token: ' + accessToken)
        console.log('Item ID: ' + itemId)
        res.json({
          error: false
        })
        const user = req.user
        if (!user.accessToken) {
          user.accessToken = accessToken
          user.itemId = itemId
          await user.save()

          // Update profile stage
          const profile = await Profile.findOne({ _user: req.user.id })
          profile.stage = 1
          await profile.save()
          res.send(user)
        } else {
          console.log('User has an access token already!')
        }
      }
    )
  })

  // Get transactions for last 30 days
  app.get('/api/transactions', requireLogin, async (req, res, next) => {
    // Find active week
    // Use week.time to pull necesary transactions
    const activeGoal = await Goal.findOne({
      _user: req.user.id,
      active: true
    })
    const activeWeek = activeGoal.weeks.find(week => week.active === true)
    console.log(activeWeek)

    var startDate = moment().subtract(2, 'days').format('YYYY-MM-DD')
    var endDate = moment().format('YYYY-MM-DD')
    // Exclude 'grocery' related transactions over $20
    client.getTransactions(
      req.user.accessToken,
      startDate,
      endDate,
      {
        count: 250,
        offset: 0
      },
      function (error, transactionsResponse) {
        if (error != null) {
          console.log(JSON.stringify(error))
          return res.json({ error: error })
        }
        var displayTxns = []
        var displayTxnsValue = 0
        transactionsResponse.transactions.forEach(function (txn) {
          if (txn.category_id === '19047000' && txn.amount > 20) {
          } else {
            displayTxns.push(txn)
            displayTxnsValue += txn.amount
          }
        })
        console.log(transactionsResponse.transactions)
        console.log(displayTxnsValue)
        res.json(displayTxns)
      }
    )
  })

  // Only available in production :(
  app.get('/api/income', requireLogin, function (req, res) {
    client.getIncome(req.user.accessToken, function (error, incomeResponse) {
      if (error != null) {
        console.log(error)
        return res.json({ error: error })
      }
      console.log(incomeResponse)
      // res.json(transactionsResponse.accounts[0].balances.available)
    })
  })
}
