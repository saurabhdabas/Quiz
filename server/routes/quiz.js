const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET quiz data listing. */
router.get('/', function(req, res, next) {
  axios.get(process.env.API_URL).then((response) => {
    console.log("response:",response.data.results);
    const updatedData = response.data.results.map((question) => (
      {
        ...question,answers:[...question.incorrect_answers, question.correct_answer ]
      }
    ))
    res.json(updatedData);
  }).catch((error) => {
    console.error(error);
  });
});

module.exports = router;
