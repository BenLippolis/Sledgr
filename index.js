const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
require('./models/User')
require('./models/Survey')
require('./models/Profile')
require('./models/Inflow')
require('./models/Outflow')
require('./models/Reward')
require('./services/passport')

mongoose.connect(keys.mongoURI)

const app = express()

// Body parser middleware
app.use(bodyParser.json())

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/surveyRoutes')(app)
require('./routes/plaidRoutes')(app)
require('./routes/profileRoutes')(app)
require('./routes/inflowRoutes')(app)
require('./routes/outflowRoutes')(app)
require('./routes/rewardRoutes')(app)

// Config for production routing with React Router
if (process.env.NODE_ENV === 'production') {
  // Express will serve production assets like main js & css
  app.use(express.static('client/build'))

  // Express will serve index.html if it does not recognize route
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT)
