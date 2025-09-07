import React from 'react'
import "./Home.css";
import homeimg from '../../images/img-1.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center'>
        <div className='row container'>
            <div className='col-lg-6 d-flex justify-content-center align-items-start flex-column' style={{height:"91.5vh"}}>
                <h2 style={{fontSize:"50px"}}>Welcome To</h2>
                <h3 style={{fontSize:"70px"}}>Our Book Shop</h3>
                <p className='mb-0' style={{color:"silver"}}>Checkout the Books From Here.</p>
                <Link to='/books' className='viewbook my-3'>Veiw Books</Link>
            </div>
            <div className='col-lg-6 d-flex justify-content-center align-items-end flex-column' style={{height:"91.5vh"}}>
                <img className='homeimg' src={homeimg} alt='/'/>
            </div>
        </div>
    </div>
  )
}

export default Home