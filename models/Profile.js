const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileSchema = new Schema({
    name: String,
    birthday: String,
    _user: { type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('profile', profileSchema);