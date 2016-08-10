var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('services', { 
  			 title: 'DH | Services',
  			 header: 'Services',
  			 plans:[{
  			 	price: "$40",
  			 	time: "1h Massage",
		        title: "Introductory Offer",
		        notes: "Health if the first step to Freedom"
  			 },{
  			 	price: "$50",
  			 	time: "1h Massage",
	          	title: "Essential therapeutic relief",
	          	notes: "Ideal for mild stress and relaxation"
  			 },{
  			 	price: "$75",
  			 	time: "1.5h Massage",
	          	title: "Complete therapeutic relief",
	          	notes: "Ideal for neglected stress, tight muscles or persistent pain"
  			 },{
  			 	price: "$100",
  			 	time: "2h Massage",
	          	title: "Maximum therapeutic relief",
	          	notes: "Ideal for chronic stress, tension and/or pain"

  			 }],
  			 services:[{
  			 	name:"Acupuncture",
          id:"acupuncture",
  			 	benefits:[
  			 	"Decreased anxiety",
          "Enhanced sleep quality",
          "Greater energy",
          "Improved concentration",
          "Increased circulation",
          "Reduced fatigue",
          "Relieves headaches"]
  			 },{
  			 	name:"Deep tissue massage",
          id:"massage",
  			 	benefits:[
  			 	"Encourages relaxation",
          "Improves posture",
          "Improves circulation",
          "Lower blood pressure",
          "Relaxes muscles",
          "Improves flexibility and range of motion"]
  			 },{
  			 	name:"Combination therapy",
          id:"combination",
  			 	benefits:[
          "Alleviate low-back pain and improve range of motion",
          "Assist with shorter, easier labor for expectant mothers and shorten maternity hospital stays",
          "Ease medication dependence",
          "Enhance immunity by stimulating lymph flow—the body's natural defense system",
          "Exercise and stretch weak, tight, or atrophied muscles",
          "Help athletes of any level prepare for, and recover from, strenuous workouts",
          "Improve the condition of the body's largest organ—the skin",
          "Increase joint flexibility",
          "Lessen depression and anxiety",
          "Promote tissue regeneration, reducing scar tissue and stretch marks",
          "Pump oxygen and nutrients into tissues and vital organs, improving circulation",
          "Reduce postsurgery adhesions and swelling",
          "Reduce spasms and cramping",
          "Relax and soften injured, tired, and overused muscles",
          "Release endorphins—amino acids that work as the body's natural painkiller",
          "Relieve migraine pain"]
  			 }]
  						});
});

module.exports = router;
