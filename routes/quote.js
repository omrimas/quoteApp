var express = require('express');
var router = express.Router();

var quotes = [ 
	'\“Don\'t cry because it\'s over, smile because it happened.\” -Dr. Seuss',
	'\“You only live once, but if you do it right, once is enough.\” ― Mae West',
	'\“To live is the rarest thing in the world. Most people exist, that is all.\” - Oscar Wilde',
	'\“What\'s the point of going out? We\'re just gonna wind up back here anyway.” - Homer Simpson',
	'\“I\’ve learned that life is one crushing defeat after another until you just wish Flanders was dead.\” - Homer Simpson',
	'\“I believe that children are our future. Unless we stop them now.\” - Homer Simpson',
	'\"Just because I don\'t care doesn\'t mean I don\'t understand.\" - Homer Simpson',
	'\“Be kind whenever possible. It is always possible.\” - Dalai Lama',
	'\“Where ignorance is our master, there is no possibility of real peace.\” - Dalai Lama'
];

/* GET random listing. */
router.get('/', function(req, res, next) {

	//generate random number for choosing quote
	var randomNum = Math.floor(Math.random() * quotes.length);
	var randomQuote = quotes[randomNum];
  res.send({quote: randomQuote});

});

module.exports = router;
