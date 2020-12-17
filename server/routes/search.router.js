const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();


router.get('/:searchQuery', (req, res) => {
    let GIPHY_KEY = process.env.GIPHY_API_KEY;
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${GIPHY_KEY}&q=${req.params.searchQuery}&limit=10`)
    .then( response => {
        res.send(response.data);
    })
    .catch( error => {
        console.log('Error doing search GET from giphy', error);
        res.sendStatus(500);
    })
})


module.exports = router;