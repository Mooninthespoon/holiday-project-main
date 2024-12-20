import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../assets/animation_santa.json';
import '../styles/mainStyle.css'

function MainPage() {
    return(
        <div className='main d-flex flex-column justify-content-center align-items-center vh-100 bg-white text-center'>
            <div className='card2 p-4 shadow rounded'>    
                <div>
                    <Lottie animationData={animationData} loop={true} />
                </div>
                <h2 className='text-white'>HO HO HO</h2>
                <p className='text-white'>Hello, Santa has made you a card</p>
                <Link to="/card">
                    <button className='btn btn-light mt-3 px-4 py-2'>
                        View Card
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default MainPage;