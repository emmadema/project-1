
//initiates jQuery in the document
$(document).ready(function(){
	console.log('query ready');

	var points = 0; //tracks how many matched the player has made
	var score = 0; //tracks how many games the player has won
	var clicks = 0; //tracks the players clicks to ensure ony two clicks are allowed before the card is flipped
	var classNames = []; //calls names array feeds in the class names for the click function and then moves them out

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
				points++;//add one point each time there is a match
				$(".points").append(points); //show the points next to the point on the game board
				//console.log(points);
				if (points === 3){//if points are equal to 3
					setTimeout(alert, 1000, "You Win!"); //player wins the game and an alert is show
					score++;//one point is added to the score
					$(".score").append(score); //show the score next to the score on the game board
				}
		} else { //if there is no match then show the card back and hide the card front
			$(this).find('.cardBack').show();//when I remove this the card clicked on secong dissaperes
			$(this).find('.cardFront').hide();//hide the card front
			classNames[0].hide();//hide all the cardFronts with index of 0 in the class names array
			classNames[0].parent().find('.cardBack').show();//show all the cardBacks with index of 0 in the class names array
			}
		classNames = [];//clear the array after two cards are drawn that dont match
		}
	});
	//reset button 
	$('.refresh').click(function(){//when the refresh button is clicked run this function
 		$('.cardFront').hide();//for every card hide the card front with the character
 		$('.cardBack').show();//for every card show the card back with the Rugrats logo
 		classNames=[]; //sets class names back to 0
 		points=0; //sets points back to 0
 		clicks=0; //sets clicks back to 0
 	});
});

	

 





