var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test', function(req, res, next) {
  // res.render('test', { sdf:'43444444444444444444' });
  res.send('333333333333');
});

module.exports = router;
