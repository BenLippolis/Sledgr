const mongoose = require('mongoose');
const { Schema } = mongoose

const inflowSchema = new Schema({
    title: String, 
    amount: Number 
});

module.exports = inflowSchema;