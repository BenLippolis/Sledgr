const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    access_token: String,
    item_id: String
});

mongoose.model('users', userSchema);