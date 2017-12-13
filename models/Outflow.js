const mongoose = require('mongoose');
const { Schema } = mongoose

const outflowSchema = new Schema({
    title: String, 
    amount: Number 
});

module.exports = outflowSchema;