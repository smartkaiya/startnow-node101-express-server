// import files and packages up here
var data = require('./data.json');
var express = require('express');
var morgan = require('morgan');


// create your express server below
var app = express()

app.use(morgan('combined'));
// add your routes and middleware below
app.get('/', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.send()
});

//create a /data route
app.get('/data', function (req, res) {
    res.send(data)  
});

// finally export the express application
module.exports = app;
