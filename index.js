const express = require('express');        //Express to run our app
const app = express();                     //Initiate the app
const path = require('path');              //Navigate to build folder
const axios = require('axios');
const bodyParser = require('body-parser');

// instruct Express to serve the files in the build folder
app.use(express.static(path.join(__dirname, './client/build')))

app.use(bodyParser.json());
// API to get words from words API and avoid CORS issue that occures
// when this external API is queried directly from the React app
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

app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// default to send all unknown requests a copy of our React app
app.get('*', (req,res) => {
  // res.sendFile(path.join(__dirname, 'build/index.html'))
  res.sendFile(path.join(__dirname, 'build/index.html'))
 });

const port = process.env.PORT || 5001

app.listen(port, () => {
  console.log('Listening on port', port)
});
