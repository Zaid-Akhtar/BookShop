import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Allbooks from '../Components/Allbooks'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Books = () => {
    const [Data, setData] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetchBooks()
    }, [])

    const fetchBooks = async () => {
        await axios.get("http://localhost:5000/api/v1/getBook")
        .then((res) => setData(res.data.books))
    }

    const handleDelete = async (id) => {
        if(window.confirm("Are you sure you want to delete this book?")) {
            await axios.delete(`http://localhost:5000/api/v1/deleteBook/${id}`)
            .then(() => {
                setData(Data.filter(book => book._id !== id))
            })
        }
    }

    const handleUpdate = (book) => {
        // Book ki details ko AddBooks page par bhejna
        navigate('/addbooks', { state: { book } });
    }

    return (
        <div className='bg-dark' style={{minHeight:"91.5vh"}}>
            <div className='d-flex justify-content-center align-items-center py-3'>
                <h4 className='text-white'>Books</h4>
            </div>
            {Data.length > 0 ? (
                <Allbooks data={Data} onDelete={handleDelete} onUpdate={handleUpdate} />
            ) : <div className='text-white'>Loading......</div>}
        </div>
    )
}

export default Books