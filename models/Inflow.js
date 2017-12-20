const mongoose = require('mongoose');
const { Schema } = mongoose

const inflowSchema = new Schema({
    title: String, 
    amount: Number,
    _profile: { type: Schema.Types.ObjectId, ref: 'Profile'}
});

module.exports = inflowSchema;