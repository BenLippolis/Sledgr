const mongoose = require('mongoose')
const { Schema } = mongoose

const rewardSchema = new Schema({
  category1: String,
  category2: String,
  category3: String,
  description: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
})

mongoose.model('reward', rewardSchema)
