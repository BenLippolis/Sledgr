const mongoose = require('mongoose')
const { Schema } = mongoose

const expenseSchema = new mongoose.Schema({
  title: String,
  amount: Number
})

const profileSchema = new Schema({
  name: String,
  birthday: String,
  maxSavings: { type: Number, default: 0 },
  showMaxSavings: { type: Boolean, default: true },
  targetSavings: { type: Number, default: 0 },
  percentSaved: { type: Number, default: 0.8 },
  monthlySpend: { type: Number, default: 0 },
  percentSpent: { type: Number, default: 0.2 },
  rewardSchedule: { type: Number, default: 0 },
  rewardBudget: { type: Number, default: 0 },
  activeGoal: { type: Boolean, default: false },
  stage: { type: Number, default: 0 },
  rewardType: { type: String, default: '_____' },
  rewardNotes: { type: String, default: '' },
  income: { type: Number, default: 0 },
  incomeFrequency: { type: Number, default: 0 },
  expenses: [expenseSchema],
  weeklyMaxSavings: { type: Number, default: 0 },
  weeklyExpenseTotal: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
})

mongoose.model('profile', profileSchema)
