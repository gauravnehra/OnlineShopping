var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
  res.send('product page');
});

router.get('/:id', function(req, res, next) {
    //   res.render('index', { title: 'Express' });
      res.send(req.params.id);
    });

module.exports = router;
