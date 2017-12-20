const mongoose = require('mongoose');
const { Schema } = mongoose

const outflowSchema = new Schema({
    title: String, 
    amount: Number,
    _profile: { type: Schema.Types.ObjectId, ref: 'Profile'}
});