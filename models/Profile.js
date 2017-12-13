const mongoose = require('mongoose');
const { Schema } = mongoose;
const InflowSchema = require('./Inflow');
const OutflowSchema = require('./Outflow');

const profileSchema = new Schema({
    name: String,
    birthday: Date,
    //inflows: [InflowSchema],
    //outflows: [OutflowSchema],
    _user: { type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('profile', profileSchema);