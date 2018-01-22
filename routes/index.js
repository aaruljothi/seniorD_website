var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'GDMS Senior D Team' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'GDMS Senior D Team' });
});

module.exports = router;
