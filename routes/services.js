var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('services', { 
  			 title: 'DH | Services',
  			 header: 'Services',
  			 moto: 'This is Services Page' 
  						});
});

module.exports = router;
