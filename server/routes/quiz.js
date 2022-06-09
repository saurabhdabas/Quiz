const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET quiz data listing. */
router.get('/', function(req, res, next) {
  axios.get(process.env.API_URL).then((response) => {
    res.json(response.data.results);
  }).catch((error) => {
    console.error(error);
  });
});

module.exports = router;
