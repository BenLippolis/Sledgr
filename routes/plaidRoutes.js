const requireLogin = require('../middlewares/requireLogin')
const keys = require('../config/keys')
const plaid = require('plaid')
const moment = require('moment')

const PLAID_CLIENT_ID = keys.plaidClientId
const PLAID_SECRET = keys.plaidSecret
const PLAID_PUBLIC_KEY = keys.plaidPublic
const PLAID_ENV = keys.plaidEnv

// Initialize the Plaid client
var client = new plaid.Client(
  PLAID_CLIENT_ID,
  PLAID_SECRET,
  PLAID_PUBLIC_KEY,
  plaid.environments[PLAID_ENV]
)

module.exports = app => {
  app.post('/api/get_access_token', requireLogin, function (req, res, next) {
    PUBLIC_TOKEN = req.body.public_token
    client.exchangePublicToken(PUBLIC_TOKEN, function (error, tokenResponse) {
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
      if (!user.access_token) {
        user.access_token = ACCESS_TOKEN
        user.item_id = ITEM_ID
        user.save()
      } else {
        console.log('User has an access token already!')
      }
    })
  })

  app.get('/api/transactions', requireLogin, function (req, res, next) {
    // Pull transactions for the Item for the last 30 days
    var startDate = moment().subtract(30, 'days').format('YYYY-MM-DD')
    var endDate = moment().format('YYYY-MM-DD')
    client.getTransactions(
      req.user.access_token,
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
        res.json(transactionsResponse.transactions)
      }
    )
  })
}
