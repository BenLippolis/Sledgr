const mongoose = require('mongoose')
const { Schema } = mongoose

const profileSchema = new Schema({
  name: String,
  birthday: String,
  maxSavings: Number,
  showMaxSavings: Boolean,
  targetSavings: Number,
  percentSaved: Number,
  monthlySpend: Number,
  percentSpent: Number,
  rewardSchedule: Number,
  rewardBudget: Number,
  activeGoal: Boolean,
  stage: Number,
  rewardType: String,
  rewardNotes: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
})

mongoose.model('profile', profileSchema)
