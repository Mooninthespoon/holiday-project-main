const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors');

app.use(cors());

app.get('/',(req,res) => {

    res.send('Backend Server');

});

app.listen(PORT, () => 

    console.log(`SERVER running on http://localhost:${PORT}`)

);