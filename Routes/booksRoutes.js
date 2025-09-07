const router = require('express').Router();
const bookModel = require('../models/booksModel')

// Post Methods
router.post('/add', async (req, res) => {
    try{
        const data = req.body
        const newBook = new bookModel(data)
        await newBook.save().then(() => {
            res.status(200).json({message: 'Book added successfully'})
        })
    } catch (error) {
        console.log(error)
    }
})

// Get Methods
router.get('/getBook', async(req, res) => {
    let books;
    try{
        const books = await bookModel.find()
        res.status(200).json({books})
    } catch(error){
        console.log(error)
    }
})

// Get Request By ID
router.get('/getBook/:id', async(req, res) => {
    let books;
    const id = req.params.id
    try{
        const books = await bookModel.findById(id)
        res.status(200).json({books})
    } catch(error){
        console.log(error)
    }
})

// Update Request By ID
router.put('/updateBook/:id', async (req, res) => {
    const id = req.params.id
    const {bookname, description, aurthor,image,price} = req.body
    let book;
    try{
        await bookModel.findByIdAndUpdate(id, {
            bookname, 
            description, 
            aurthor,
            image,
            price
        })
        const book = await book.save().then(() => res.json({book},{message: 'Book Updated'})) 
    } catch(error){
        console.log(error)
    }
})

// Delete Request By ID
router.delete('/deleteBook/:id', async(req, res) => {
    const id = req.params.id
    try{
        await bookModel.findByIdAndDelete(id).then(() => res.status(200).json({message: 'Book deleted successfully'}))
    } catch(error){
        console.log(error)
    }
})


module.exports = router