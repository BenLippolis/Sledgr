const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')
const User = mongoose.model('users')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user)
  })
})

// Create new instance of Google Passport Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // Check to see if user exists in DB
      const existingUser = await User.findOne({ googleId: profile.id })

      // If user exists
      if (existingUser) {
        // Done tells passport to contine auth flow
        return done(null, existingUser)
      }
      // If not, create new user
      const user = await new User({ googleId: profile.id }).save()
      // Done tells passport to contine auth flow
      done(null, user)
    }
  )
)
