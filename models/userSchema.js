const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
    }
},{timestamps: true})

const User = mongoose.model('person', userSchema)
module.exports = User