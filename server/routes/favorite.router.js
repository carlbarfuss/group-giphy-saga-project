const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  let queryText = 'SELECT * FROM favorite JOIN category ON favorite.category_id = category.id;';
  pool.query(queryText).then(result => {
    // Sends back the results in an object
    console.log(result.rows);
    res.send(result.rows);
  })
    .catch(error => {
      console.log('Error doing GET from DB');
      res.sendStatus(500)
    })
})

// add a new favorite 
// TODO TEST HERE
router.post('/', (req, res) => {
  const gifToAdd = req.body;
  let sqlText = `INSERT INTO favorite (url, alt_text) VALUES ($1, $2)`
  pool.query(sqlText, [gifToAdd.url, gifToAdd.title])
  .then ((result) => {
    console.log('added gif to the favorite table');
    res.sendStatus(201);
  })
  .catch((error) => {
    console.log('error adding gif to favorite table', error);
    res.sendStatus(500);
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
