const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, './client/build')))

app.use(bodyParser.json());
app.get('/api/words', (req, res) => {
  const difficulty = req.query.difficulty > 0 ? '?difficulty=' + req.query.difficulty : ''
  axios.get('http://app.linkedin-reach.io/words' + difficulty)
    .then(response => {
      res.send(response.data)
    })
    .catch((error)=> {
        console.log("enable to fetch data:", error);
    })
});

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'))
 });

const port = process.env.PORT || 5001

app.listen(port, () => {
  console.log('Listening on port', port)
});
