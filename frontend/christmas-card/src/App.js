import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';
import CardPage from './pages/xcard'

function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    axios.get('<http://localhost:3001>')
      .then(response => setMessage(response.data))
      .catch(error => console.error('Error fetching data:', error))
  }, []);

  return(
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path="*" element={<ErrorPage/>} />
        <Route path='/card' element={<CardPage/>} />
      </Routes>
    </Router>
  );

}

export default App;