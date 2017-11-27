
var cardAmount;   // global var//

$(document).ready(function() {

$(".two").hide();  
$(".model").hide();  
$(".three").hide();  
$(".four").hide(); 
$("#gifs-appear-here").hide();


var finalExercise = [];
var firstExercise;
var secondExercise;
var thirdExercise;
var fourthExercise;
var counter = 0;

	document.getElementById("startButtonOne").onclick = function() {startButtonOneFunction()};
  	function startButtonOneFunction() {
    	$(".one").hide(); 
      $(".model").show();  
    	cardAmount = 0;
	}

	document.getElementById("startButtonTwo").onclick = function() {startButtonTwoFunction()};
  	function startButtonTwoFunction() {
    	$(".one").hide();
    	$(".model").show();   
    	cardAmount = 26;
    }

    document.getElementById("startButtonThree").onclick = function() {startButtonThreeFunction()};
  	function startButtonThreeFunction() {
    	$(".one").hide();
      $(".model").show();  
    	cardAmount = 39;
    }


    document.getElementById("xavierButton").onclick = function() {xavierButtonFunction()};
    function xavierButtonFunction() {
       $(".two").show(); 
       window.location.href="#move";
    }


    document.getElementById("fullBody").onclick = function() {fullBodyFunction()};
  	function fullBodyFunction() {
  		$(".two").hide(); 
  		$(".three").show();
  		document.getElementById("exerciseOne").innerHTML = "Sit-Ups"
  		document.getElementById("exerciseOne").onclick = function() {exerciseOneFunction()};
  		function exerciseOneFunction(){
  			var exercise = "Sit-Ups"
  			finalExercise.push(exercise);
  			counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show(); }
  		}

  		document.getElementById("exerciseTwo").innerHTML = "Tuck Jumps"
  		document.getElementById("exerciseTwo").onclick = function() {exerciseTwoFunction()};
  		function exerciseTwoFunction(){
  			var exercise = "Tuck Jumps"
  			finalExercise.push(exercise);
  			counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
  			 if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
  		}

  		document.getElementById("exerciseThree").innerHTML = "Plank To Push"
  		document.getElementById("exerciseThree").onclick = function() {exerciseThreeFunction()};
  		function exerciseThreeFunction(){
  			var exercise = "Plank To Push"
  			finalExercise.push(exercise);
  			counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
  			 if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
  		}	

  		document.getElementById("exerciseFour").innerHTML = "Burpees"
  		document.getElementById("exerciseFour").onclick = function() {exerciseFourFunction()};
  		function exerciseFourFunction(){
  			var exercise = "Burpees"
  			finalExercise.push(exercise);
  			counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
  			 if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
  	}	
  		document.getElementById("exerciseFive").innerHTML = "Single Leg Raises"
      document.getElementById("exerciseFive").onclick = function() {exerciseFiveFunction()};
      function exerciseFiveFunction(){
        var exercise = "Single Leg Raises"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}

    }
  		document.getElementById("exerciseSix").innerHTML = "V-Ups"
      document.getElementById("exerciseSix").onclick = function() {exerciseSixFunction()};
      function exerciseSixFunction(){
        var exercise = "V-Ups"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }

  		document.getElementById("exerciseSeven").innerHTML = "Inchworms"
      document.getElementById("exerciseSeven").onclick = function() {exerciseSevenFunction()};
      function exerciseSevenFunction(){
        var exercise = "Inchworms"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }

  		document.getElementById("exerciseEight").innerHTML = "Squats"
      document.getElementById("exerciseEight").onclick = function() {exerciseEightFunction()};
      function exerciseEightFunction(){
        var exercise = "Squats"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
  		document.getElementById("exerciseNine").innerHTML = "Russian Twist"
      document.getElementById("exerciseNine").onclick = function() {exerciseNineFunction()};
      function exerciseNineFunction(){
        var exercise = "Russian Twist"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
  		document.getElementById("exerciseTen").innerHTML = "Toe Touches"
      document.getElementById("exerciseTen").onclick = function() {exerciseTenFunction()};
      function exerciseTenFunction(){
        var exercise = "Toe Touches"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
  		document.getElementById("exerciseEleven").innerHTML = "Single Leg Raises"
      document.getElementById("exerciseEleven").onclick = function() {exerciseElevenFunction()};
      function exerciseElevenFunction(){
        var exercise = "Single Leg Raises"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
  		document.getElementById("exerciseTwelve").innerHTML = "Push-Ups"
      document.getElementById("exerciseTwelve").onclick = function() {exerciseTwelveFunction()};
      function exerciseTwelveFunction(){
        var exercise = "Push-Ups"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
  		document.getElementById("exerciseThirteen").innerHTML = "Triceps On Chair"
      document.getElementById("exerciseThirteen").onclick = function() {exerciseThirteenFunction()};
      function exerciseThirteenFunction(){
        var exercise = "Triceps On Chair"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
  		document.getElementById("exerciseFourteen").innerHTML = "Plank"
      document.getElementById("exerciseFourteen").onclick = function() {exerciseFourteenFunction()};
      function exerciseFourteenFunction(){
        var exercise = "Plank"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }

  		document.getElementById("exerciseFifteen").innerHTML = "Fire Hydrant"
      document.getElementById("exerciseFifteen").onclick = function() {exerciseFifteenFunction()};
      function exerciseFifteenFunction(){
        var exercise = "Fire Hydrant"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
  		document.getElementById("exerciseSixteen").innerHTML = "Diamond Push-Up"
      document.getElementById("exerciseSixteen").onclick = function() {exerciseSixteenFunction()};
      function exerciseSixteenFunction(){
        var exercise = "Diamond Push-Up"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
      
  document.getElementById("exerciseSeventeen").innerHTML = "Calf Raises"
      document.getElementById("exerciseSeventeen").onclick = function() {exerciseSeventeenFunction()};
      function exerciseSeventeenFunction(){
        var exercise = "Calf Raises"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }

    document.getElementById("exerciseEighteen").innerHTML = "Burpees"
      document.getElementById("exerciseEighteen").onclick = function() {exerciseEighteenFunction()};
      function exerciseEighteenFunction(){
        var exercise = "Burpees"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }

    document.getElementById("exerciseNineteen").innerHTML = "Push-Ups"
      document.getElementById("exerciseNineteen").onclick = function() {exerciseNineteenFunction()};
      function exerciseNineteenFunction(){
        var exercise = "Push-Ups"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }

    document.getElementById("exerciseTwenty").innerHTML = "Up Downs"
      document.getElementById("exerciseTwenty").onclick = function() {exerciseTwentyFunction()};
      function exerciseTwentyFunction(){
        var exercise = "Up Downs"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
    document.getElementById("exerciseTone").innerHTML = "Skier Jumps"
      document.getElementById("exerciseTone").onclick = function() {exerciseToneFunction()};
      function exerciseToneFunction(){
        var exercise = "Skier Jumps"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
    document.getElementById("exerciseTtwo").innerHTML = "Squats"
      document.getElementById("exerciseTtwo").onclick = function() {exerciseTtwoFunction()};
      function exerciseTtwoFunction(){
        var exercise = "Squats"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
   document.getElementById("exerciseTthree").innerHTML = "Lunges"
      document.getElementById("exerciseTthree").onclick = function() {exerciseTthreeFunction()};
      function exerciseTthreeFunction(){
        var exercise = "Lunges"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
   document.getElementById("exerciseTfour").innerHTML = "Mountain Climbers"
      document.getElementById("exerciseTfour").onclick = function() {exerciseTfourFunction()};
      function exerciseTfourFunction(){
        var exercise = "Mountain Climbers"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
  		

    }


    document.getElementById("upperBody").onclick = function() {upperBodyFunction()};
  	function upperBodyFunction() {
  		$(".long").hide();
  		$(".three").show();
  		$(".two").hide(); 
  		document.getElementById("exerciseOne").innerHTML = "Push-Ups"
      document.getElementById("exerciseOne").onclick = function() {exerciseOneFunction()};
      function exerciseOneFunction(){
      var exercise = "Push-Ups"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
       }
  		document.getElementById("exerciseTwo").innerHTML = "Triceps On Chair"
      document.getElementById("exerciseTwo").onclick = function() {exerciseTwoFunction()};
      function exerciseTwoFunction(){
      var exercise = "Triceps On Chair"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
        }
  		document.getElementById("exerciseThree").innerHTML = "Plank To Push"
      document.getElementById("exerciseThree").onclick = function() {exerciseThreeFunction()};
      function exerciseThreeFunction(){
      var exercise = "Plank To Push"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
       }
  		document.getElementById("exerciseFour").innerHTML = "Diamond Push-Ups"
      document.getElementById("exerciseFour").onclick = function() {exerciseFourFunction()};
      function exerciseFourFunction(){
      var exercise = "Diamond-Ups"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
      }
  		document.getElementById("exerciseFive").innerHTML = "Inchworm"
      document.getElementById("exerciseFive").onclick = function() {exerciseFiveFunction()};
      function exerciseFiveFunction(){
      var exercise = "Inchworm"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }

  		document.getElementById("exerciseSix").innerHTML = "Burpees"  
      document.getElementById("exerciseSix").onclick = function() {exerciseSixFunction()};
      function exerciseSixFunction(){
      var exercise = "Burpees"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
    	// inchworms, diamond push-ups, push-up triceps, plank to push//
    }

     document.getElementById("lowerBody").onclick = function() {lowerBodyFunction()};
  	function lowerBodyFunction() {
  		$(".long").hide();
  		$(".two").hide(); 
  		$(".three").show();
  		document.getElementById("exerciseOne").innerHTML = "Single Leg Raises"
      document.getElementById("exerciseOne").onclick = function() {exerciseOneFunction()};
      function exerciseOneFunction(){
      var exercise = "Singe Leg Raises"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
      }
  		document.getElementById("exerciseTwo").innerHTML = "Tuck Jumps"
      document.getElementById("exerciseTwo").onclick = function() {exerciseTwoFunction()};
      function exerciseTwoFunction(){
      var exercise = "Tuck Jumps"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
      }
  		document.getElementById("exerciseThree").innerHTML = "Curtsy Lunges"
      document.getElementById("exerciseThree").onclick = function() {exerciseThreeFunction()};
      function exerciseThreeFunction(){
      var exercise = "Curtsy Lunges"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
      }
  		document.getElementById("exerciseFour").innerHTML = "Calf Raises"
      document.getElementById("exerciseFour").onclick = function() {exerciseFourFunction()};
      function exerciseFourFunction(){
      var exercise = "Calf Raises"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
      }
  		document.getElementById("exerciseFive").innerHTML = "Lunges"
      document.getElementById("exerciseFive").onclick = function() {exerciseFiveFunction()};
      function exerciseFiveFunction(){
      var exercise = "Lunges"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
      }
  		document.getElementById("exerciseSix").innerHTML = "Squats"  
      document.getElementById("exerciseSix").onclick = function() {exerciseSixFunction()};
      function exerciseSixFunction(){
      var exercise = "Squats"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
      }
    	// fire hydrent, single leg raises, squats, lunges, calf raises, curtsy lunges, hip raises//
    }

    document.getElementById("coreBody").onclick = function() {coreBodyFunction()};
  	function coreBodyFunction() {
  		$(".long").hide();
  		$(".two").hide(); 
  		$(".three").show();
  		document.getElementById("exerciseOne").innerHTML = "Sit-Ups"
      document.getElementById("exerciseOne").onclick = function() {exerciseOneFunction()};
      function exerciseOneFunction(){
      var exercise = "Sit-Ups"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
     
  		document.getElementById("exerciseTwo").innerHTML = "V-Ups"
      document.getElementById("exerciseTwo").onclick = function() {exerciseTwoFunction()};
      function exerciseTwoFunction(){
      var exercise = "V-Ups"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
     
  		document.getElementById("exerciseThree").innerHTML = "Plank To Push"
      document.getElementById("exerciseThree").onclick = function() {exerciseThreeFunction()};
      function exerciseThreeFunction(){
      var exercise = "Plank To Push"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
     
  		document.getElementById("exerciseFour").innerHTML = "Toe Touches"
      document.getElementById("exerciseFour").onclick = function() {exerciseFourFunction()};
      function exerciseFourFunction(){
      var exercise = "Toe Touches"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
     
  		document.getElementById("exerciseFive").innerHTML = "Russian Twist"
      document.getElementById("exerciseFive").onclick = function() {exerciseFiveFunction()};
      function exerciseFiveFunction(){
      var exercise = "Russian Twist"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
     
  		document.getElementById("exerciseSix").innerHTML = "Burpees"
      document.getElementById("exerciseSix").onclick = function() {exerciseSixFunction()};
      function exerciseSixFunction(){
      var exercise = "Burpees"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
     
    	// situps, toe touches, Russian Twist, V-ups, plank,//
    }

    document.getElementById("cardioBody").onclick = function() {cardioBodyFunction()};
  	function cardioBodyFunction() {
  		$(".long").hide();
  		$(".two").hide(); 
  		$(".three").show();
  		document.getElementById("exerciseOne").innerHTML = "Burpees"
      document.getElementById("exerciseOne").onclick = function() {exerciseOneFunction()};
      function exerciseOneFunction(){
      var exercise = "Burpees"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
     
  		document.getElementById("exerciseTwo").innerHTML = "Tuck Jumps"
      document.getElementById("exerciseTwo").onclick = function() {exerciseTwoFunction()};
      function exerciseTwoFunction(){
      var exercise = "Tuck Jumps"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
     
  		document.getElementById("exerciseThree").innerHTML = "Montain Climbers"
      document.getElementById("exerciseThree").onclick = function() {exerciseThreeFunction()};
      function exerciseThreeFunction(){
      var exercise = "Mountain Climbers"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
     
  		document.getElementById("exerciseFour").innerHTML = "Skier Jumps"
      document.getElementById("exerciseFour").onclick = function() {exerciseFourFunction()};
      function exerciseFourFunction(){
      var exercise = "Skier Jumps"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
  		document.getElementById("exerciseFive").innerHTML = "Curtsy Lunges"
      document.getElementById("exerciseFive").onclick = function() {exerciseFiveFunction()};
      function exerciseFiveFunction(){
      var exercise = "Curtsy Lunges"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    }
  		document.getElementById("exerciseSix").innerHTML = "Up-Downs"  
      document.getElementById("exerciseSix").onclick = function() {exerciseSixFunction()};
      function exerciseSixFunction(){
      var exercise = "Up-Downs"
        finalExercise.push(exercise);
        counter++;
        document.getElementById("exerciseNumber").innerHTML = "You have selected " + counter + " exercise(s)"
         if (counter === 4) { $(".three").hide(); $("#stop").hide(); $(".four").show();}
    	// burpee's, //
    }
}


document.getElementById("startWorkout").onclick = function() {startWorkoutFunction()};
  	function startWorkoutFunction() {
  		$(".three").hide();
  		document.getElementById("startWorkout").innerHTML = "Next Exercise"
  		$(".finalText").hide();  
    }

var suits = [ "hearts", "diams", "clubs", "spades" ];
var ranks = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A" ];
var exercises = ["Sit Ups", "Push Ups", "Burpees", "Tuck Jumps"];


var deck = [];

$(init);

function init() {
  makeDeck();
  
  $("#startWorkout").click( function() {
    
    var myCard = drawCard();
    
    if( myCard ) {
      makeCard( myCard.suit, myCard.rank );
    } else { $("#startWorkout").hide(); 
            $("#stop").show();
            $("#pause").hide();
            $("#textInfoTwo").hide();
            $("#cardHere").hide();
            $("#textInfo").html("You Smashed IT!!");
            $("#gifs-appear-here").show();
              } // to close else
    
  });
  
}

function makeDeck() {
  
  deck = [];
  //for each type of suit
  for( var i = 0; i < suits.length; i++ ) {
    //and for each rank
    for( var j = 0; j < ranks.length; j++ ) {
      
      //make a card
      var card = {};
      card.suit = suits[i];
      card.rank = ranks[j];
      
      deck.push(card);
    }
  }
  
  console.log( "MADE A NEW DECK OF ", deck.length, " CARDS" );
  console.log( deck );
}

function drawCard() {
  
  var card;
  
  if( deck.length > cardAmount ) {
    
    var randIndex = Math.floor( Math.random() * deck.length );
    card = deck.splice( randIndex, 1 )[0];
  }
  

  return card;
}

function makeCard( suit, rank ) {
  var card = $(".card.template").clone();
  
  card.removeClass("template");
  
  card.find(".rank").html(rank);
 
  if (rank === 2) {$("#textInfo").html("Complete TWO repetitions of");}
  if (rank === 3) {$("#textInfo").html("Complete THREE repetitions of");}
  if (rank === 4) {$("#textInfo").html("Complete FOUR repetitions of");}
  if (rank === 5) {$("#textInfo").html("Complete FIVE repetitions of");}
  if (rank === 6) {$("#textInfo").html("Complete SIX repetitions of");}
  if (rank === 7) {$("#textInfo").html("Complete SEVEN repetitions of");}
  if (rank === 8) {$("#textInfo").html("Complete EIGHT repetitions of");}
  if (rank === 9) {$("#textInfo").html("Complete NINE repetitions of");}
  if (rank === 'A') {$("#textInfo").html("Complete ELEVEN repeitions of");}
  if (rank === 10 || rank === 'J' || rank === 'Q' || rank === 'K') {$("#textInfo").html("Complete TEN repetitions of");}
  if (suit === 'hearts') {$("#textInfoTwo").html(finalExercise[0]);}
  if (suit === 'diams') {$("#textInfoTwo").html(finalExercise[1]);}
  if (suit === 'clubs') {$("#textInfoTwo").html(finalExercise[2]);}
  if (suit === 'spades') {$("#textInfoTwo").html(finalExercise[3]);}

  card.find(".suit").html("&"+suit+";");
  
  if( suit === "hearts" || suit === "diams" ) {
    card.addClass("red");
  }
  
  $("#cardHere").append(card);
}







}); 