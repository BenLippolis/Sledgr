const mongoose = require('mongoose')
const { Schema } = mongoose

const weekSchema = new mongoose.Schema({
  time: { type: Date, default: Date.now },
  active: { type: Boolean, default: true },
  endSpend: { type: Number, default: 0 },
  success: Boolean
})

const goalSchema = new Schema({
  time: { type: Date, default: Date.now },
  active: { type: Boolean, default: true },
  weekCount: { type: Number, default: 0 },
  maxSpend: { type: Number, default: 0 },
  weeks: [weekSchema],
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
})

mongoose.model('goal', goalSchema)
