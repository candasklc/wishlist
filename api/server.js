const 
express = require('express'),
PORT = 8000,
cors = require('cors'),
axios = require('axios'),
mongoose = require('mongoose');

require('dotenv').config;

const app = express();

app.use('/', express.static('dist/wishlist'))

app.get('/get', (req,res) => {
    res.json("hi")
})



const server = app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT);
});