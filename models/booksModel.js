const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookname:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    aurthor:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('books', bookSchema);