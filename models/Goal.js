const mongoose = require('mongoose')
const { Schema } = mongoose

const balanceSchema = new mongoose.Schema({
  value: Number
})

const goalSchema = new Schema({
  time: { type: Date, default: Date.now },
  balances: [balanceSchema],
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
})

mongoose.model('goal', goalSchema)
