$(document).ready(function() {
	console.log('doc ready');
	// bind click event to getQuoteButton
	$('#getQuoteButton').on('click', function() {

		// Make ajax call to get new random quote
		$.get('quote', function( data ) {
			if ( data.quote ) {
				addQuote(data.quote);
			}
			else {
				console.log('no quote returned');
			}
		})
		.fail(function() {
			console.log('request failed');
		});

	});

	/* addQuote get string quote as an input
	** and append it to #boxOfQuotes element
	*/
	var addQuote = function() {
		var quoteList = $('#boxOfQuotes');
		return function( quote ) {

			//create new div with the new random quote
			$('<div/>', { 
				class: 'quoteItem', 
				text: quote 
			} ).appendTo(quoteList);
		}
	}();

});