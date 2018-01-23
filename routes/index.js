var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/pages', function(req, res, next) {
  res.render('index');
});

router.get('/', function(req, res, next) {
  res.render('cover');
});

module.exports = router;
