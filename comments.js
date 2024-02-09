// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// create a comment array
let comments = [];

// Use body parser to get data from POST requests
app.use(bodyParser.json());

// Create a POST route to add a new comment
app.post('/comment', (req, res) => {
  let newComment = req.body;
  comments.push(newComment);
  res.status(200).send('Comment added');
});

// Create a GET route to retrieve comments
app.get('/comment', (req, res) => {
  res.status(200).send(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Path: index.js
const axios = require('axios');

// Create a new comment
axios.post('http://localhost:3000/comment', {
  comment: "This is a great post!"
})
.then((response) => {
  console.log(response.data);
})
.catch((error) => {
  console.log(error);
});

// Retrieve all comments
axios.get('http://localhost:3000/comment')
.then((response) => {
  console.log(response.data);
})
.catch((error) => {
  console.log(error);
});

// Run the code
// $ node index.js
