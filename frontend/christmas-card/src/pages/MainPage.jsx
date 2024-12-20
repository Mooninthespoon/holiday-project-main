import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../assets/animation_santa.json';

function MainPage() {
    return(
        <div className='d-flex flex-column justify-content-center align-items-center vh-100 bg-white text-center'>
            <div>
                <Lottie animationData={animationData} loop={true}/>
            </div>
            <h2 className='mt-4'>HO HO HO</h2>
            <p>Hello, Santa has made you a card</p>
            <Link to="/card">
                <button className='btn btn-primary mt-3 px-4 py-2'>
                    View Card
                </button>
            </Link>
        </div>
    );
}

export default MainPage;