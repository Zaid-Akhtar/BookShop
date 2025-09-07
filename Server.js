const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const dbconnection = require('./db/dbconn')
const booksRoutes = require('./Routes/booksRoutes')
const cors = require('cors')


const app = express()
app.use(cors())
dotenv.config()


app.use(express.json())
app.use('/api/v1',booksRoutes);





// app.post('/login', async(req, res) => {
//     const {username, password} = req.body;
//     const user = await User.findOne({username});
//     if(user){
//         return res.status(200).send({message:'Already Exist'});
//         const hash = await bcrypt.hash(password, 10);
//         const userData = await new User({username, password: hash}).save();
//     }
//     else{
//         return res.status(400).send({message:'Invalid User'});
//     }
//     const checkcredentials = bcrypt.compare(password, user.password);
//     if(checkcredentials){
//         return res.status(200).send({message:'Logged in successfully'});
//     }
//     else{
//         return res.status(400).send({message:'Invalid credentials'});
//     }
// })


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    dbconnection()
    console.log(`Server is running on port ${PORT}`.bgCyan)
})