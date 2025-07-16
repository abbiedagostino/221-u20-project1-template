
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const feedController = require('./controller/feedController');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
app.use(bodyParser.json());

app.get('/feed', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'client', 'views', 'feed.html'));
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'client', 'views', 'index.html'));
});

app.get('/feed/api', function(req, res) {
    feedController.getAllFeedItems(req, res);
});

app.post('/feed/api', function(req, res) {
    feedController.saveFeedItem(req, res);
});

app.get('/feed/api/:id', function(req, res) {
    feedController.getFeedItem(req, res);
});

app.delete('/feed/api/:id', function(req, res) {
    feedController.deleteFeedItem(req, res);
});

app.patch('/feed/api/:id', function(req, res) {
    feedController.updateFeedItem(req, res);
});

const PORT = 1337;
app.listen(PORT, function() {
    console.log(`Server running on http://localhost:${PORT}`);
});

