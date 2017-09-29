//initiates jQuery in the document
$(document).ready(function(){
	console.log('query ready');

	var points1 = 0;//tracks how many matches player one got
	var points2 = 0;//track how many matches player 2 got
	var score1 = 0;//keeps score for player one (how many games they won)
	var score2 = 0;//keeps  track of score for player two (games won)

	var clicks = 0;//counts the number of clicks each player has made
	var classNames = []; //calls names array feeds in the class names for the click function and then moves them out
	var playerTurn = "player_1"; //starts the player at player one
	setTimeout(alert, 500, "Player One's Turn");//alerts that it is player ones turn when the game starts

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
					classNames = []; //clear the array after a match
					points1++;//ad one point each time
						$(".pointsOne div").text("");//sets points on to empty string
						$(".pointsOne div").append(points1); //display the points
						//console.log(points1);
						playerTurn = "player_2";//set the player turn to player to move on
						setTimeout(alert, 500, 'Player 2 Turn'); //annouce that it is player twos turn only after 1.5 seconds
					if (points1 === 3){//if points are three then execute code
						setTimeout(alert, 1000, "Player 1 Wins!"); //send alert that player one wins only after 1.5 seconds
						score1++;//add one point to player ones score
						$(".scoreOne div").text("");//sets score one to empty string
						$(".scoreOne div").append(score1);//append player ones score to the game board
					}

				} 
				else { //if there is no match then show the card back and hide the card front
						setTimeout( () => {//this arraw function sets a timout and allows the previous this to be passed into this function
						playerTurn = "player_2";//set players turn to player two to move on	
						$(this).find('.cardBack').show();//when I remove this the card clicked on secong dissaperes
						$(this).find('.cardFront').hide();//hide the front of the card
						classNames[0].hide();//when I remove this the first card dissappersand the second card appers under the card Back
						classNames[0].parent().find('.cardBack').show();//when I remove this the first card clicked disspears and the second card never flips
						classNames = [];//sets class names to ewmpty array

					}, 250);//delays this block of codse by 1/4 second
					setTimeout(alert, 500, "No match, Player Two's Turn");//alerts player not match and it is next players turn
				}
			}
		} 
		else {//if it is player twos turn execute the below code
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
					classNames = []; //clear the array after a match
					points2++;//ad one point each time
					$(".pointsTwo div").text("");//sets points 2 to an empty string
					$(".pointsTwo div").append(points2); //display the points
					//console.log(points2);
					playerTurn = "player_1";//set the turn back to player one
					setTimeout(alert, 500, "Player One's Turn"); //alert player 1 turn after 1.5 seconds
					if (points2 === 3){//if points are three then execute code
						setTimeout(alert, 1000, "Player 2 Wins!"); //
						score2++;//add one to the score when there is a match
						$(".scoreTwo div").text("");
						$(".scoreTwo div").append(score2);
					}

				}
				else { //if there is no match then show the card back and hide the card front
					
					setTimeout( () => { //this keep the this from the main function and passes into this timeout fucntion
						playerTurn = "player_1"; //changes the player turn back to plauyer one
						$(this).find('.cardBack').show();//when I remove this the card clicked on secong dissaperes
						$(this).find('.cardFront').hide();//hide the front of the card
						classNames[0].hide();//when I remove this the first card dissappersand the second card appers under the card Back
						classNames[0].parent().find('.cardBack').show();//when I remove this the first card clicked disspears and the second card never flips
						classNames = [];//sets classNames back to an empty array
						alert("No match, Player One's Turn"); //alerts that the palyer did not get a match and it is the next player turn

					}, 250); //delays this by a 1/4 second
				}
			}	
		}
	});
	//reset button 
	$('.refresh').click(function(){//when the refresh button is clicked run this function
 		$('.cardFront').hide();//for every card hide the card front with the character
 		$('.cardBack').show();//for every card show the card back with the Rugrats logo
 		classNames=[]; //sets class names back to 0
 		points1=0; //sets points 1 back to 0
 		$(".pointsOne div").text("");//sets the points one div back to an empty string
		$(".pointsOne div").append(points1); //appends the empty string
		points2=0;//sets point 2 to 0
		$(".pointsTwo div").text(""); //sets the points two div back to an empty string
		$(".pointsTwo div").append(points2);//appends the empty string
 		clicks=0; //sets clicks back to 0
  		playerTurn= "player_1";//set the player turn back to player one
  		alert("Player One's turn");//alert player one that it is their turn
 	});	
});