const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors');

app.use(cors());

app.get('/',(req,res) => {

    res.send('Wishing you a Christmas season filled with joy, love, and magic. May your days be merry and bright, and may you feel the warmth and happiness that Christmas brings. With love and festive cheer, Santa Claus');

});

app.listen(PORT, () => 

    console.log(`SERVER running on http://localhost:${PORT}`)

);