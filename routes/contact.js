var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { 
  			 title: 'DH | Contact',
  			 moto: 'This is contact Page' 
  						});
});

module.exports = router;