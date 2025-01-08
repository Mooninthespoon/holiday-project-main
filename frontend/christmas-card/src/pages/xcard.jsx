import React, { useEffect, useState } from "react";
import { Link, resolvePath } from 'react-router-dom';
import '../styles/cardStyle.css'
import santa from "../assets/santa.png"
import axios from "axios";

function CardPage() {
    const [message,setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001/')
            .then(response => setMessage(response.data))
            .catch(error => console.error('Error fetching Xmas Card:',error));
    }, []);

    return(
        <div className="main d-flex text-center justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow rounded">
                <div className="text-center mb-4">
                    <img src={santa} alt="santa clause" width="80" />
                </div>
                <h3 className="welcome text-center mb-3 text-white " >Merry Christmas</h3>
                <p className="text-center mb-3 text-white">{message}</p>
                <Link to='/'>
                    <button className="px-3 py-2 rounded-3 font-basic text-center">Leave the Card</button>
                </Link>
            </div>
        </div>
    );
}

export default CardPage;