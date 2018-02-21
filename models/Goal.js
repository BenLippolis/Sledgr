const mongoose = require('mongoose')
const { Schema } = mongoose

const weekSchema = new mongoose.Schema({
  time: { type: Date, default: Date.now },
  active: { type: Boolean, default: true },
  max_spend: Number,
  end_spend: Number
})

const goalSchema = new Schema({
  time: { type: Date, default: Date.now },
  active: { type: Boolean, default: true },
  week_count: Number,
  weeks: [weekSchema],
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
})

mongoose.model('goal', goalSchema)
