//Create web server and listen to port 3000
const express = require('express');
const app = express();
const comments = require('./comments.json');

app.get('/comments', (req, res) => {
  res.status(200).json(comments);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
