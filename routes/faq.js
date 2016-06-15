var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('faq', { 
  			 title: 'DH | F.A.Q',
  			 moto: 'This is F.A.Q Page' 
  						});
});

module.exports = router;