//initiates jQuery in the document
$(document).ready(function(){
	console.log('query ready');

	var points = 0;//tracks how many matched each player got
	var score = 0;//keeps score for each player (how many games they won)
	var clicks = 0;//counts the number of clicks each player has made
	var classNames = []; //calls names array feeds in the class names for the click function and then moves them out
	var playerTurn = "player_1"; //starts the player at player one
	alert("Player One's Turn");//alerts that it is player ones turn when the game starts

	$('.cells').click(function(){ //starts a fucntion on a click
		if (playerTurn === "player_1") { //if the player turn is player one execute the below code
			$(this).find('.cardFront').show();//find only the card front of the element that is clicked 
			$(this).find('.cardBack').hide();//find only the card back of the elemnt that is clicked and hide it		
			classNames.push($(this).find('.cardFront'));//push the class name of card front into the array classNames
			//console.log(classNames);//checking to make sure the class names is working
			if (clicks === 0) { //when the click varable is 0 execute code
				clicks++;//add one to the click count
				//dont compare
			} 
			else if (clicks === 1) { //if clicks = 1 the execute code
				clicks=0;//move the clicks back to 0 and move on to compare the cards
				//compare
				if (classNames[0].attr('class') === classNames[1].attr('class')) {//if the classNames match up in the array for both 1 and 2 execute code
					//$(this).unbind('click');//dont allow another click 
					//classNames = []; //clear the array after a match
					setTimeout(alert, 250, "Player 1 got a match!"); //send alert that you have a match, but dont run it until the card is flipped over
					points++;//ad one point each time
						$(".pointsOne div").text("");
						$(".pointsOne div").append(points); //display the points
					//console.log(points);
					if (points === 3){//if points are three then execute code
						setTimeout(alert, 1000, "Player 1 Wins!"); //send alert that player one wins only after 1.5 seconds
						score++;//add one point to player ones score
						$(".scoreOne div").text("");
						$(".scoreOne div").append(score);//append player ones score to the game board
					}
					playerTurn = "player_2";//set the player turn to player to move on
					setTimeout(alert, 500, 'Player 2 Turn'); //annouce that it is player twos turn only after 1.5 seconds
				} 
				else { //if there is no match then show the card back and hide the card front
					playerTurn = "player_2";//set players turn to player two to move on
					//alert('Player 1 Turn');
					setTimeout( () => {
						$(this).find('.cardBack').show();//when I remove this the card clicked on secong dissaperes
						$(this).find('.cardFront').hide();//hide the front of the card
						classNames[0].hide();//when I remove this the first card dissappersand the second card appers under the card Back
						classNames[0].parent().find('.cardBack').show();//when I remove this the first card clicked disspears and the second card never flips

						classNames = [];

					}, 250);
				}
				 //when I remove this the first card show and then hide as soon as the second card is clicked withouh showing the second card
				 //clear the array after two cards are drawn that dont match
				//clicks=0;	
				//(alert 1000, 'Player 2 Turn');//al;ert player two that it is their turn
				//empty the class names array
			}
		} 
		else {//if it is player twos turn execute the below code
			//alert("Player Two's Turn");
			$(this).find('.cardFront').show();//find only the card front of the element that is clicked 
			$(this).find('.cardBack').hide();//find only the card back of the elemnt that is clicked and hide it		
			classNames.push($(this).find('.cardFront'));//push the class name of card front into the array classNames
			console.log(classNames);//checking to make sure the class names is working
			if (clicks === 0) { //when the click varable is 0 execute code
				clicks++;//add one to the click count
				//dont compare
			}
			else if (clicks === 1) { //if clicks = 1 the execute code
				clicks=0; // move the clicks back to 0 and move on to compare the cards
				//compare
				if (classNames[0].attr('class') === classNames[1].attr('class')){//if the classNames match up in the array for both 1 and 2 execute code
					//$(this).unbind('click');//dont allow another click 
					//classNames = []; //clear the array after a match
					setTimeout(alert, 250, "Player 2 got a match!"); //send alert that you have a match, but dont run it until the card is flipped over
					points++;//ad one point each time
					$(".pointsTwo div").text("");
					$(".pointsTwo div").append(points); //display the points
					console.log(points);
					if (points === 3){//if points are three then execute code
						setTimeout(alert, 1000, "Player 2 Wins!"); //
						
						score++;//add one to the score when there is a match
						$(".scoreTwo div").text("");
						$(".scoreTwo div").append(score);
					}
					playerTurn = "player_1";//set the turn back to player one
					setTimeout(alert, 500, 'player 1 turn'); //alert player 1 turn after 1.5 seconds
				}
				else { //if there is no match then show the card back and hide the card front
					
				setTimeout( () => {
						playerTurn = "player_1";
						$(this).find('.cardBack').show();//when I remove this the card clicked on secong dissaperes
						$(this).find('.cardFront').hide();//hide the front of the card
						classNames[0].hide();//when I remove this the first card dissappersand the second card appers under the card Back
						classNames[0].parent().find('.cardBack').show();//when I remove this the first card clicked disspears and the second card never flips

						classNames = [];

					}, 250);
			}	}
		}
	});
	//reset button 
	$('.refresh').click(function(){//when the refresh button is clicked run this function
 		$('.cardFront').hide();//for every card hide the card front with the character
 		$('.cardBack').show();//for every card show the card back with the Rugrats logo
 		classNames=[]; //sets class names back to 0
 		points=0; //sets points back to 0
 		clicks=0; //sets clicks back to 0
  		playerTurn= "player_1";//set the player turn back to player one
  		alert("Player One's turn");//alert player one that it is their turn
 	});	
});