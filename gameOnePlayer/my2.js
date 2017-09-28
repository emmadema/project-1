
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


	var points = 0;
	var score = 0;

	

	var clicks = 0;
	var classNames = []; //calls names array feeds in the class names for the click function and then moves them out

	var player1 = player1;
	var player2 = player2;
	//function seeCard (){
		//var flipped = $('')
	//}

	//flip the cards when a cell is clicked
	$('.cells').click(function(){ //when a cell is clicked run this function
		$(this).find('.cardFront').show();//find only the card front of the element that is clicked 
		$(this).find('.cardBack').hide();//find only the card back of the elemnt that is clicked and hide it		
		classNames.push($(this).find('.cardFront'));//push the class name of card front into the array classNames
		console.log(classNames);//checking to make sure the class names is working
		if (clicks === 0) { //when the click varable is 0 execute code
			clicks++;//add one to the click count
			//dont compare
		} else if (clicks === 1) { //if clicks = 1 the execute code
			clicks=0; // move the clicks back to 0 and move on to compare the cards
			//compare
			if (classNames[0].attr('class') === classNames[1].attr('class')){//if the classNames match up in the array for both 1 and 2 execute code
				//$(this).unbind('click');//dont allow another click 
				//classNames = []; //clear the array after a match
				setTimeout(alert, 500, "You got a match!"); //send alert that you have a match, but dont run it until the card is flipped over
				points++;
				$(".points").append(points);
				console.log(points);
				if (points === 3){
					setTimeout(alert, 1000, "You Win!");
					score++;
					$(".score").append(score);
				}
		} else { //if there is no match then show the card back and hide the card front
			$(this).find('.cardBack').show();//when I remove this the card clicked on secong dissaperes
			$(this).find('.cardFront').hide();
			classNames[0].hide();//when I remove this the first card dissappersand the second card appers under the card Back
			classNames[0].parent().find('.cardBack').show();//when I remove this the first card clicked disspears and the second card never flips
			 //when I remove this the first card show and then hide as soon as the second card is clicked withouh showing the second card
			 //clear the array after two cards are drawn that dont match
			//clicks=0;	
			}

		classNames = [];
		
		}
	
	});


			
		
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
 		classNames=[]; //sets class names back to 0
 		points=0; //sets points back to 0
 		clicks=0; //sets clicks back to 0
  		//$('.cells').attr('class').bind('click');

 	});
 	
});

	

 





