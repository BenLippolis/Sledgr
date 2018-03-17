const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
// Require all models
require('./models/User')
require('./models/Profile')
require('./models/Goal')
require('./services/passport')

// Connect to DB using mongoose
mongoose.connect(keys.mongoURI)

// Establish express web framework
const app = express()

// Establish body parser middleware
app.use(bodyParser.json())

// Establish cookie config for sessions
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())

// Require all routes
require('./routes/authRoutes')(app)
require('./routes/plaidRoutes')(app)
require('./routes/profileRoutes')(app)
require('./routes/goalRoutes')(app)

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

// Establish port config for dev & production
const PORT = process.env.PORT || 5000
app.listen(PORT)
