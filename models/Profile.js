const mongoose = require('mongoose')
const { Schema } = mongoose

const profileSchema = new Schema({
  name: String,
  birthday: String,
  max_savings: Number,
  show_max_savings: Boolean,
  target_savings: Number,
  percent_saved: Number,
  monthly_spend: Number,
  percent_spent: Number,
  reward_schedule: Number,
  reward_budget: Number,
  active_goal: Boolean,
  stage: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
})

mongoose.model('profile', profileSchema)
