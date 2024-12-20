import React from "react";
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../assets/santa-error.json';

function ErrorPage() {
    return(
        <div className="d-flex flex-column justify-content-center align-items-center bh-100 bg-light text-center">
            <div style={{ maxWidth: '400px' }}>
                <Lottie animationData={animationData} loop={true} />
            </div>
            <h2>
                HO HO, OH NO
            </h2>
            <p>404 - Santa hasn't visited this page yet, try another</p>

            <Link to="/">
                <button className="btn btn-primary mt-3 px-4 py-2">
                    Your Card
                </button>
            </Link>
        </div>
    );
}

export default ErrorPage;