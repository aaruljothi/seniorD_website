var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/pages', function(req, res, next) {
  res.render('index', { title: 'Aerial Spectrum Mapping' });
});

router.get('/', function(req, res, next) {
  res.render('cover', { title: 'Aerial Spectrum Mapping' });
});

module.exports = router;
