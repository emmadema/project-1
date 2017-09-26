
//initiates jQuery in the document
$(document).ready(function(){
	console.log('query ready');

//showing images when clicked
//on click hide image on front of card and show image on back of card
//unbind click so each card can only be clicked once
//append image to the DOM for back or card
//add image for front of card same for each cells

 	$('.cells').click(function(){
 			for();
 			$('.cardBack').hide();
 			$('.cardFront').show();
 	});

 	


 	//refresh button

 	//$('.refresh').click(function(){
 		//var randomImg = Math.floor(Math.random()*100);
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