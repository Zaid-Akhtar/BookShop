const mongoose = require('mongoose')
const colors = require('colors')

const dbconnection = () => {
    try {
        mongoose.connect('mongodb://localhost:27017/Bookshop')
        console.log('Database Connected'.bgYellow)
    } catch (error) {
        console.log('Database Failed'.bgRed)
    }
}

module.exports = dbconnection

