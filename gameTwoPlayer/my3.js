//initiates jQuery in the document
$(document).ready(function(){
console.log('query ready');

	var points = 0;
	var score = 0;

	var clicks = 0;
	var classNames = []; //calls names array feeds in the class names for the click function and then moves them out

	var playerTurn = "player_1";

	$('.cells').click(function(){
		if (playerTurn === "player_1") {
			//alert("Player One's Turn");
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
				setTimeout(alert, 500, "Player 1 got a match!"); //send alert that you have a match, but dont run it until the card is flipped over
				points++;//ad one point each time
				$(".pointsOne").append(points); //display the points
				console.log(points);
				if (points === 3){//if points are three then execute code
					setTimeout(alert, 1000, "Player 1 Wins!"); //
					score++;
					$(".scoreOne").append(score);
				}
				playerTurn = "player_2";
				setTimeout(alert, 1500, 'Player 2 Turn');
		} else { //if there is no match then show the card back and hide the card front
			playerTurn = "player_2";
			//alert('Player 1 Turn');
			$(this).find('.cardBack').show();//when I remove this the card clicked on secong dissaperes
			$(this).find('.cardFront').hide();
			classNames[0].hide();//when I remove this the first card dissappersand the second card appers under the card Back
			classNames[0].parent().find('.cardBack').show();//when I remove this the first card clicked disspears and the second card never flips
			 //when I remove this the first card show and then hide as soon as the second card is clicked withouh showing the second card
			 //clear the array after two cards are drawn that dont match
			//clicks=0;	
			alert('Player 2 Turn');
			}

		classNames = [];
	}

		} else {
			//alert("Player Two's Turn");
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
				setTimeout(alert, 500, "Player 2 got a match!"); //send alert that you have a match, but dont run it until the card is flipped over
				points++;//ad one point each time
				$(".pointsTwo").append(points); //display the points
				console.log(points);
				if (points === 3){//if points are three then execute code
					setTimeout(alert, 1000, "Player 2 Wins!"); //
					score++;//add one to the score when there is a match
					$(".scoreTwo").append(score);
				}
				playerTurn = "player_1";
				setTimeout(alert, 1500, 'player 1 turn');
		} else { //if there is no match then show the card back and hide the card front
			playerTurn = "player_1";
			$(this).find('.cardBack').show();//when I remove this the card clicked on secong dissaperes
			$(this).find('.cardFront').hide();
			classNames[0].hide();//when I remove this the first card dissappersand the second card appers under the card Back
			classNames[0].parent().find('.cardBack').show();//when I remove this the first card clicked disspears and the second card never flips
			 //when I remove this the first card show and then hide as soon as the second card is clicked withouh showing the second card
			 //clear the array after two cards are drawn that dont match
			//clicks=0;	
			alert('player 1 turn');
			}

		classNames = [];
		}
	}
		
	});	
	

	//reset button 
	$('.refresh').click(function(){//when the refresh button is clicked run this function
 		$('.cardFront').hide();//for every card hide the card front with the character
 		$('.cardBack').show();//for every card show the card back with the Rugrats logo
 		classNames=[]; //sets class names back to 0
 		points=0; //sets points back to 0
 		clicks=0; //sets clicks back to 0
  		playerTurn= "player_1";

 	});
 	
});
