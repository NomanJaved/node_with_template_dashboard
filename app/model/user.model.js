const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name : String,
    last_name : String,
    user_name : String,
    email : String,
    password : String,
    active: String,
    created_at : { type: Date, default: Date.now },
})

module.exports = mongoose.model('user', userSchema);