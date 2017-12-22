const mongoose = require('mongoose');
const { Schema } = mongoose

const outflowSchema = new Schema({
    title: String, 
    amount: Number,
    _user: { type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('outflow', outflowSchema);