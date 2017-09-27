
//initiates jQuery in the document
$(document).ready(function(){
	console.log('query ready');

//showing images when clicked
//on click hide image on front of card and show image on back of card
//unbind click so each card can only be clicked once
//append image to the DOM for back or card
//add image for front of card same for each cells


	var topLeft = ($('#topLeft'));
	var topMiddle = ($('#topMiddle'));
	var topRight = ($('#topRight'));
	var bottomLeft = ($('#bottomLeft'));
	var bottomMiddle = ($('#bottomMiddle'));
	var bottomRight = ($('#bottomRight'));

	var clickCells = $('.cells').click();

	switch ('clickCells')
	{
		case topLeft:
			$('.cardBack').hide();
 			$('.cardFront').show();
 			console.log('card 1 clicked');
 			break;
 		case topMiddle:
 			$('.cardBack').hide();
 			$('.cardFront').show();
 			console.log('card 2 clicked');
 			break;
 		case topRight:
 			$('.cardBack').hide();
 			$('.cardFront').show();
 			console.log('card 3 clicked');
 			break;
 		case bottomLeft:
 			$('.cardBack').hide();
 			$('.cardFront').show();
 			console.log('card 4 clicked');
 			break;
 		case bottomMiddle:
 			$('.cardBack').hide();
 			$('.cardFront').show();
 			console.log('card 5 clicked');
 			break;
 		case bottomRight:
 			$('.cardBack').hide();
 			$('.cardFront').show();
 			console.log('card 6 clicked');
 			break;
	}

 	/*$('.cells').click(function(){
 		if (topLeft) {
 			$('.cardBack').hide();
 			$('.cardFront').show();
 			console.log('card 1 clicked');
 			break;
 		} else if (topMiddle) { 
 			$('.cardBack').hide();
 			$('.cardFront').show();
 			console.log('card 2 clicked');
 			break;
 		} else if (topRight) {
 			$('.cardBack').hide();
 			$('.cardFront').show();
 			console.log('card 3 clicked');
 			break;
 		} else if (bottomLeft) {
 			$('.cardBack').hide();
 			$('.cardFront').show();
 			console.log('card 4 clicked');
 			break;
 		} else if (bottomMiddle) {
 			$('.cardBack').hide();
 			$('.cardFront').show();
 			console.log('card 5 clicked');
 			break;
 		} else if (bottomRight) {
 			$('.cardBack').hide();
 			$('.cardFront').show();
 			console.log('card 6 clicked');
 			break;
 		} else {
 			return ("No more matches");
 		}

 	});*/

 	


 	//refresh button

 	$('.refresh').click(function(){
 		$('.cardFront').hide();
 		$('.cardBack').show();
 		//var randomImg = Math.floor(Math.random()*100);
 	});
 	//	console.log(random);
 	//});



});

//assigning cards randomly at the start of the game
//give each card a class and write out random sequences
//use a function to sort an array of cards randomly into each cell

//showing images when clicked
//on click hide image on front of card and show image on back of card
//unbind click so each card can only be clicked once

//keep score and store the score for each game - build the score as the player plays more games 
//when player gets all cards matched annouce a winner
//use two boards on one screen split with sperate scores then comapre the seprate scores