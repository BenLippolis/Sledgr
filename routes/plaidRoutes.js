const requireLogin = require('../middlewares/requireLogin');
const keys = require('./config/keys');
const plaid = require('plaid');

const PLAID_CLIENT_ID = keys.plaidClientId;
const PLAID_SECRET = keys.plaidSecret;
const PLAID_PUBLIC_KEY = keys.plaidPublic;
const PLAID_ENV = keys.plaidEnv;

// Initialize the Plaid client
var client = new plaid.Client(
    PLAID_CLIENT_ID,
    PLAID_SECRET,
    PLAID_PUBLIC_KEY,
    plaid.environments[PLAID_ENV]
  );

module.exports = app => {
  app.post('/get_access_token', function(request, response, next) {
    PUBLIC_TOKEN = request.body.public_token;
    client.exchangePublicToken(PUBLIC_TOKEN, function(error, tokenResponse) {
      if (error != null) {
        var msg = 'Could not exchange public_token!';
        console.log(msg + '\n' + error);
        return response.json({error: msg});
      }
      ACCESS_TOKEN = tokenResponse.access_token;
      ITEM_ID = tokenResponse.item_id;
      console.log('Access Token: ' + ACCESS_TOKEN);
      console.log('Item ID: ' + ITEM_ID);
      response.json({'error': false});
    });
  });
}