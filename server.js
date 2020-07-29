const express = require("express");
const app = express(); // create express app
const path = require('path')
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'build')))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});