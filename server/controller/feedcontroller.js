const FeedItem = require('../model/feedItem');

let feedItems = [
  new FeedItem(
    "Mens Track and Field",
    "Logan Schaeffler to compete in national championship!",
    "https://goredfoxes.com/news/2025/6/17/mens-track-field-logan-schaeffler-set-to-compete-at-usatf-u20-national-championships.aspx",
    "/images/news_pic.jpg"
  ),
  new FeedItem(
    "Woman's Basketball",
    "Marist Basketball team takes part in Paradise Jam, a prestigious basketball tournament.",
    "https://goredfoxes.com/news/2025/7/9/marist-womens-basketball-heads-to-paradise-jam.aspx",
    "/images/hancock.jpeg"
  ),
  new FeedItem(
    "Marist Softball",
    "Marist Softball players finish in top categories!",
    "https://goredfoxes.com/news/2025/7/2/four-marist-softball-players-finish-atop-ncaa-statistical-categories.aspx",
    "/images/campus.png"
  )
];

exports.getAllFeedItems = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(feedItems);
};

exports.saveFeedItem = function(req, res) {
  const { title, body, linkUrl, imageUrl } = req.body;
  const newItem = new FeedItem(title, body, linkUrl, imageUrl);
  feedItems.push(newItem);
  res.setHeader('Content-Type', 'application/json');
  res.send(feedItems);
};

exports.getFeedItem = function(req, res) {
  const id = req.params.id;
  res.setHeader('Content-Type', 'application/json');
  res.send(feedItems[id]);
};

exports.deleteFeedItem = function(req, res) {
  const id = req.params.id;
  feedItems.splice(id, 1);
  res.setHeader('Content-Type', 'application/json');
  res.send(feedItems);
};

exports.updateFeedItem = function(req, res) {
  const id = req.params.id;
  const item = feedItems[id];

  if (req.body.title) item.title = req.body.title;
  if (req.body.body) item.body = req.body.body;
  if (req.body.linkUrl) item.linkUrl = req.body.linkUrl;
  if (req.body.imageUrl) item.imageUrl = req.body.imageUrl;

  res.setHeader('Content-Type', 'application/json');
  res.send(item);
};
