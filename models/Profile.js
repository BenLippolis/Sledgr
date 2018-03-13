const mongoose = require('mongoose')
const { Schema } = mongoose

const expenseSchema = new mongoose.Schema({
  title: String,
  amount: Number
})

const profileSchema = new Schema({
  name: String,
  birthday: String,
  stage: { type: Number, default: 0 },
  income: { type: Number, default: 0 },
  incomeFrequency: { type: Number, default: 0 },
  expenses: [expenseSchema],
  weeklyExpenseTotal: { type: Number, default: 0 },
  weeklyMaxSavings: { type: Number, default: 0 },
  weeklyTargetSavings: { type: Number, default: 0 },
  percentSaved: { type: Number, default: 0.8 },
  weeklyTargetSpend: { type: Number, default: 0 },
  percentSpent: { type: Number, default: 0.2 },
  rewardSchedule: { type: Number, default: 0 },
  rewardBudget: { type: Number, default: 0 },
  rewardType: { type: String, default: '_____' },
  rewardDate: Date,
  rewardFlavor: String,
  rewardNotes: { type: String, default: '' },
  activeGoal: { type: Boolean, default: false },
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
})

mongoose.model('profile', profileSchema)
