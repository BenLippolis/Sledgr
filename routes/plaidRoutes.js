const requireLogin = require('../middlewares/requireLogin')
const keys = require('../config/keys')
const plaid = require('plaid')
const moment = require('moment')
const mongoose = require('mongoose')
const Profile = mongoose.model('profile')
const Goal = mongoose.model('goal')
const Week = mongoose.model('goal')
const Outflow = mongoose.model('outflow')

const PLAID_CLIENT_ID = keys.plaidClientId
const PLAID_SECRET = keys.plaidSecret
const PLAID_PUBLIC_KEY = keys.plaidPublic
const PLAID_ENV = keys.plaidEnv

// Initialize Plaid client
var client = new plaid.Client(
  PLAID_CLIENT_ID,
  PLAID_SECRET,
  PLAID_PUBLIC_KEY,
  plaid.environments[PLAID_ENV]
)

module.exports = app => {
  // Get access token from Plaid
  app.post('/api/get_access_token', requireLogin, async (req, res, next) => {
    PUBLIC_TOKEN = req.body.public_token
    await client.exchangePublicToken(
      PUBLIC_TOKEN,
      async (error, tokenResponse) => {
        if (error != null) {
          var msg = 'Could not exchange public_token!'
          console.log(msg + '\n' + error)
          return res.json({
            error: msg
          })
        }
        ACCESS_TOKEN = tokenResponse.access_token
        ITEM_ID = tokenResponse.item_id
        console.log('Access Token: ' + ACCESS_TOKEN)
        console.log('Item ID: ' + ITEM_ID)
        res.json({
          error: false
        })
        const user = req.user
        if (!user.accessToken) {
          user.accessToken = ACCESS_TOKEN
          user.itemId = ITEM_ID
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
    const active_goal = await Goal.findOne({
      _user: req.user.id,
      active: true
    })
    const active_week = active_goal.weeks.find(week => week.active === true)
    console.log(active_week)

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

  // Fetch the users account balance
  app.get('/api/balance', requireLogin, function (req, res) {
    client.getAccounts(req.user.accessToken, function (
      error,
      transactionsResponse
    ) {
      if (error != null) {
        console.log(error)
        return res.json({ error: error })
      }
      console.log(transactionsResponse.accounts[0].balances.available)
      // By default we're fetching the first account (temp)
      // This should fetch the one the user selects
      res.json(transactionsResponse.accounts[0].balances.available)
    })
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
