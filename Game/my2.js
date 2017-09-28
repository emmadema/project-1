
//initiates jQuery in the document
$(document).ready(function(){
	console.log('query ready');

//What I need to do
//showing images when clicked - Done
//on click hide image on front of card and show image on back of card - Done
//unbind click so each card can only be clicked once - Done
//add image for front of card same for each - Done

//showing images when clicked
//on click hide image on front of card and show image on back of card
//unbind click so each card can only be clicked once

//keep score and store the score for each game - build the score as the player plays more games 
//when player gets all cards matched annouce a winner
//use two boards on one screen split with sperate scores then comapre the seprate scores


		//var points = 0;
		//var score = $();

		/*var topLeft = $('#topLeft');
		var topMiddle = $('#topMiddle');
		var topRight = $('#topRight');
		var bottomLeft = $('#bottomLeft');
		var bottomMiddle = $('#bottomMiddle');
		var bottomRight = $('#bottomRight');
		
		var cards = [topLeft, topMiddle, topRight, bottomLeft, bottomMiddle, bottomRight];

		//when a card is clicked set the attribute of one of those */


	//flip the cards when a cell is clicked
	$('.cells').click(function(){ //when a cell is clicked run this function
		$(this).find('.cardFront').show();//find only the card front of the element that is clicked 
		$(this).find('.cardBack').hide();//find only the card back of the elemnt that is clicked and hide it	
		var flipped1 = $('.reptar').length; 
		var flipped2 = $('.tommy').length;
		var flipped3 = $('.angelica').length;//create a variable for what is cliked (this) and pull its class
		var flipped = [flipped1, flipped2, flipped3];	
			if (flipped === 2) { //if the # of flipped cards = 2 then move on
				console.log('cards flipped'); 	
			} 


	});

		//function matchingCards (){
		

		//matchingCards();
			

			//var firstCard = flipped.first(); //makes a varibale for the first flipped card
			//var secondCard = flipped.last(); //makes a varibale for the second flipped card
			//if(firstCard.attr('class') === secondCard.attr('class')) { //if the first cards class = second cards class
				//points ++;//add 1 point to the totoal points
				//console.log("You found a match!"); //alert the user that they have a match
				//firstCard.remove();//remove so the function will run again for the next match
				//secondCard.remove(); //remove so the function will run again for the next match
			//}




	
	//if number of cards =2 see if thier ids match
	// if they do match give a point
	//if two cards are slected even if they dont match flip them back over
	//if cards match keep them fliped over
	//the game is over when all cards are matched
	//assigning cards randomly at the start of the game
	//give each card a class and write out random sequences
	//use a function to sort an array of cards randomly into each cell

	

	//reset button 
	$('.refresh').click(function(){//when the refresh button is clicked run this function
 		$('.cardFront').hide();//for every card hide the card front with the character
 		$('.cardBack').show();//for every card show the card back with the Rugrats logo
 	});
 	
});

	

 





