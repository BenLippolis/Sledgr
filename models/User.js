const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  googleId: String,
  accessToken: String,
  itemId: String
})

mongoose.model('users', userSchema)
