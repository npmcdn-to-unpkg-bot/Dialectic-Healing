var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  			 title: 'Dialectic Healing',
  			 moto: 'Ancient wisdom. Modern technique.',
  			 styles: [],
  			 scripts: [],
  	});
});

module.exports = router;
