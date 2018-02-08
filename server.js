var path = require('path');
var express = require('express');
var app = express();

app.use(express.static('docs'));

app.get('/events', function(req, res) {
  res.sendFile(path.join(__dirname + '/docs/events.html'));
});

app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname + '/docs/about.html'));
});

app.get('/team', function(req, res) {
  res.sendFile(path.join(__dirname + '/docs/team.html'));
});

app.get('/apply', function(req, res) {
  res.sendFile(path.join(__dirname + '/docs/apply.html'));
});

app.get('/join', function(req, res) {
  res.sendFile(path.join(__dirname + '/docs/join.html'));
});

app.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname + '/docs/contact.html'));
});

app.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname + '/docs/contact.html'));
});

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname + '/docs/404.html'));
});

app.listen(3000, function() {
  console.log('listening');
});