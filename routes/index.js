var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  			 title: 'Dialectic Healing',
  			 moto: 'Ancient wisdom. Modern technique.',
  			 scripts: [],
  			 plans:[{
  			 	price: "$40",
  			 	time: "1h Massage",
          title: "Introductory Offer",
          notes: "Come experience what the fuss is all about!"
  			 },{
  			 	price: "$50",
  			 	time: "1h Massage",
          title: "Essential therapeutic relief",
          notes: "Ideal for mild stress and relaxation"
  			 },{
  			 	price: "$75",
  			 	time: "90m Massage",
          title: "Complete therapeutic relief",
          notes: "Ideal for neglected stress, tight muscles or persistent pain"
  			 },{
  			 	price: "$100",
  			 	time: "2h Massage",
          title: "Maximum therapeutic relief",
          notes: "Ideal for chronic stress, tension and/or pain"

  			 }],
  			 reviews:[
  			 {
  			 	img: "/images/Michelle R.jpg",
  			 	name: "Michelle R.",
  			 	date: "07/23/2013",
  			 	rating: 5,
  			 	text: "I've been a client of Jessica's for the past three years and she is by far the BEST masseuse that I have ever worked with.  Jessica is in a class of her own, she gets to know you and your aliments and customizes her sessions to best fit your needs.  She is absolutely wonderful to work with and I am thankful that I found her when I moved to Denver.  Even if you currently have a masseuse that you are working with I would recommend at least one session with Jessica so that you can experience a truly and healing massage."
  			 },
  			 {
  			 	img: "/images/Joshua H.jpg",
  			 	name: "Joshua H.",
  			 	date: "06/04/2013",
  			 	rating: 5,
  			 	text: "I finally found a regular massage therapist that I liked after trying a ton of them, and a few months later she went on maternity leave indefinitely: I was bummed... a friend recommended Jessica. And after the first massage, I was actually happy my old massage therapist had taken a leave because I ended up with a better one! Great rates, hours, location, pressure, technique... couldn't ask for more."
  			 }]
  	});
});

module.exports = router;
