import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../styles/cardStyle.css'
import santa from "../assets/santa.png"

function CardPage() {
    return(
        <div className="main d-flex text-center justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow rounded">
                <div className="text-center mb-4">
                    <img src={santa} alt="santa clause" width="80" />
                </div>
                <h3 className="welcome text-center mb-3 text-white " >Merry Christmas</h3>
                <p className="text-center mb-3 text-white">Wishing you a Christmas season filled with joy, love, and magic. May your days be merry and bright, and may you feel the warmth and happiness that Christmas brings. With love and festive cheer, Santa Claus</p>
                <Link to='/'>
                    <button className="px-3 py-2 rounded-3 font-basic text-center" color='white'>Leave the Card</button>
                </Link>
            </div>
        </div>
    );
}

export default CardPage;