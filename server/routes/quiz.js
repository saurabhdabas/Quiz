const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET quiz data listing. */
router.get('/', function(req, res, next) {
  axios.get(process.env.API_URL).then((response) => {
    console.log("response:",response.data);
    const updatedData = response.data.map((question) => (
      {
        ...question,answers:[...question.incorrectAnswers, question.correctAnswer ]
      }
    ))
    res.json(updatedData);
  }).catch((error) => {
    console.error(error);
  });
});

module.exports = router;
