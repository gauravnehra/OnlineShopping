var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Users route page');
});

router.get('/grv', function(req, res, next) {
  res.send('Welcome Gaurav');
});

module.exports = router;
