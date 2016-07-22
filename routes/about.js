var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { 
  			 title: 'DH | About',
  			 header: 'About',
  			 styles: [],
  			 scripts: [],
  			 ownerImg: '/images/Jessica.jpg',
  			 ownerName: 'Jessica Janowicz',
  			 ownerBio1: "Jessica Janowicz earned her Master of Acupuncture and Oriental Medicine degree from The Colorado School of Traditional Chinese Medicine in April 2014. This 28-month accelerated program consists of 2,265 hours of education, including 525 hours of clinical practice, and 150 hours of clinical observation. Additionally, Jessica received her massage therapy degree from The Denver School of Massage Therapy in December 2007. This program consisted of 820 hours of training and 120 hours of clinical internship. Jessica’s training includes adjunctive therapies such as moxibustion, massage, electro stimulation, cupping, auriculotherapy, and dietary and lifestyle recommendations. Her specialties include sports massage, structural bodywork, pain management, and injury rehabilitation with the incorporation of electrostimulation, auriculotherapy, and stretching.",
  			 ownerBio2: "In 2015, Jessica was certified as a Master of Science in Acupuncture (M.S.Ac.) by the National Certification Commission for Acupuncture and Oriental Medicine (NCCAOM), and a practitioner of Therapeutic Massage and Bodywork by the National Certification Board of Therapeutic Massage and Bodywork (NCBTMB). Jessica’s training also included certification in Clean Needle Technique. Jessica is a member of the Acupuncture Association of Colorado and the American Association of Oriental Medicine.  She is also certified to administer first aid and CPR. None of Jessica’s licenses, certificates, or registrations has ever been suspended or revoked.",
  			 reviews:[
  			 {
  			 	img: "/images/Sveta Y.jpg",
  			 	name: "Sveta Y.",
  			 	date: "04/14/2016",
  			 	rating: 5,
  			 	text: "Jessica is incredible. I've had back and neck pain lasting weeks, and after she works on me for just a bit, the pain LITERALLY dissolves.  Not only is she an incredibly talented massage therapist, she's also extremely professional, friendly, and knows how to create a tranquil atmosphere. Some massage therapists are stiff and silent and make me feel really weird, like I'm in a doctor's office, and others just blather on and on about trivialities. Jessica knows when to ask questions, or chat with her clients, and when to just let me drift off into near-slumber. Every time I leave her clinic, I'm walking on air."
  			 },
  			 {
  			 	img: "/images/no_img.png",
  			 	name: "Len S.",
  			 	date: "04/14/2015",
  			 	rating: 5,
  			 	text: "I've had therapeutic massages periodically for the past three decades.  About eight years ago my marathon running career ended when a hip replacement went bad.  That recovery took years due to nerve damage and constant falling during the recovery process, which in turn generated serious, hemispheric migraines due to cervical damage from the falls. This all leads to my wonderful, chance finding of Jessica over three years ago.  I now receive treatment weekly and the migraines have reduced from several per week to only one or two per month.  Yes, she is well trained in massage and acupuncture, but beyond that, she is an instinctive, natural healer.  Everything about her therapy -- from the friendly, yet professional atmosphere, to the pleasant conversation, to her high level of technical prowess -- is geared to assuring her patients improve over time.  She is one in ten-million as a healer and my association with her made one heck of a difference in my life."
  			 },
  			 {
  			 	img: "/images/no_img.png",
  			 	name: "Ardent C.",
  			 	date: "06/24/2015",
  			 	rating: 5,
  			 	text: "Great technique and excellent pressure if needed, she can get even the tightest knots to release between trigger point, stretches and other methods to get results. I assume she does relation also, but she is one of the best sports massage therapists I've ever had work on me, hands down. Very versatile and adaptable with a whole tool chest of methods and techniques to meet your needs and situation, she is not just a one trick pony; definitely a very well versed all round pro therapist. I understand she is now adding certification in acupuncture as well, she just keeps getting better."
  			 },
  			 {
  			 	img: "/images/no_img.png",
  			 	name: "Mike T.",
  			 	date: "03/29/2014",
  			 	rating: 5,
  			 	text: "Dialectic Healing is where you go when you want a knowledgeable, well-trained, technically sound massage therapist to repair, relax, or train muscles and joints. Jessica is passionate about her profession and about her client's well-being. I have never left not feeling significantly better than when I came in."
  			 },
  			 {
  			 	img: "/images/no_img.png",
  			 	name: "Dr. Paul M.",
  			 	date: "03/29/2014",
  			 	rating: 5,
  			 	text: "Jessica is truly an outstanding healthcare provider who takes a whole body and mind approach to deep tissue and therapeutic massage.  I am a physician and I personally have been going to see her for nearly a year now. She has worked out several musculoskeletal issues that I have had, including intermittent shoulder and neck pain and muscle spasm related to both stress and musculoskeletal sprains/strains. Because of her amazing skills and dedication to the art of healing, I even sent patients to her because of her specialized skills.  Thank you, Jessica."
  			 },
  			 {
  			 	img: "/images/Michelle R.jpg",
  			 	name: "Michelle R.",
  			 	date: "07/23/2013",
  			 	rating: 5,
  			 	text: "I've been a client of Jessica's for the past three years and she is by far the BEST masseuse that I have ever worked with.  Jessica is in a class of her own, she gets to know you and your aliments and customizes her sessions to best fit your needs.  She is absolutely wonderful to work with and I am thankful that I found her when I moved to Denver.  Even if you currently have a masseuse that you are working with I would recommend at least one session with Jessica so that you can experience a truly therapeutic and healing massage."
  			 },
  			 {
  			 	img: "/images/Joshua H.jpg",
  			 	name: "Joshua H.",
  			 	date: "06/04/2013",
  			 	rating: 5,
  			 	text: "I finally found a regular massage therapist that I liked after trying a ton of them, and a few months later she went on maternity leave indefinitely: I was bummed... a friend recommended Jessica. And after the first massage, I was actually happy my old massage therapist had taken a leave because I ended up with a better one! Great rates, hours, location, pressure, technique... couldn't ask for more."
  			 },
  			 {
  			 	img: "/images/no_img.png",
  			 	name: "Ty C.",
  			 	date: "06/14/2013",
  			 	rating: 5,
  			 	text: "Jessica is a true massage professional who takes her work very seriously while providing a very relaxing and enjoyable experience. Her holistic and comprehensive approach goes far beyond just the massage table, helping me greatly in obtaining desired results. I have been working with her for over a year on a regular basis. Jessica was far more skilled and intuitive than any other therapist that I had previously worked with and has since become the only therapist that I see. We have made measurable and documented progress with my issues and it's always a pleasure to work with her. I would highly recommend her to anyone seeking a massage therapist, especially if they are committed to to seeing real benefits."
  			 },
  			 {
  			 	img: "/images/no_img.png",
  			 	name: "Lauren R.",
  			 	date: "07/23/2013",
  			 	rating: 5,
  			 	text: "Jessica is an amazing healer and this shows in the quality of her technique and genuine concern for the well-being of her clients.  I highly recommend her as a massage therapist.  You won't be disappointed!"
  			 }

  			 ], 
  	});
});

module.exports = router;