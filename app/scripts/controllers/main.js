'use strict';

angular.module('werewolfApp').controller('MainCtrl',
 function($scope, cardKeeper, shuffler, $timeout){

	//Logic variables declared
	$scope.cardkeeper = cardKeeper;
	$scope.shuffle = shuffler;
	$scope.test = "Werewolf";
	$scope.falser = false;
	$scope.gameTitleInput;
	$scope.gameTitle = "What game are we playing today?";
	$scope.totalCards = 1;
	$scope.cardkeeper.currentCard = 1;
	$scope.cardkeeper.cardsInDeck = {
		badGuy: [true, true, false, false],
		alpha: [false],
		defender: [true, false],
		seer: [true],
		peeker: [false],
		idiot: [false],
		saver: [false],
		judge: [false]
	};

	$scope.cardkeeper.cardsInDeck.normals = 0;

//create shuffling app
	//declare variables to keep track of how many cards, and the deck being used;
	$scope.cardkeeper.counter = 0;
	$scope.cardkeeper.cardsInDeck.hand = [];

//create playing deck from chosen cards;
$scope.check = function() {
	console.log($scope.cardkeeper.cardsInDeck);

	//Put normal cards in hand to play;
	var normalCards = $scope.cardkeeper.cardsInDeck.normals;
	var counter = 0;

	while (counter < normalCards) {
		$scope.cardkeeper.cardsInDeck.hand.push("Citizen");

		counter++;
	}

	//Put special cards in hand to play;
    for (i=0; i < 4; i++) {

    	if ($scope.cardkeeper.cardsInDeck.badGuy[i]) {
    		console.log($scope.cardkeeper.cardsInDeck.badGuy[i]);
			$scope.cardkeeper.cardsInDeck.normals ++;
    		$scope.cardkeeper.cardsInDeck.hand.push("Werewolf");
    	}

    	if ($scope.cardkeeper.cardsInDeck.alpha[i]) {
    		console.log($scope.cardkeeper.cardsInDeck.alpha[i]);
    		$scope.cardkeeper.cardsInDeck.normals ++;
    		$scope.cardkeeper.cardsInDeck.hand.push("Alpha Werewolf");
    	}

    	if ($scope.cardkeeper.cardsInDeck.defender[i]) {
    		console.log($scope.cardkeeper.cardsInDeck.defender[i]);
			$scope.cardkeeper.cardsInDeck.normals ++;
    		$scope.cardkeeper.cardsInDeck.hand.push("Hunter");
    	}

    	if ($scope.cardkeeper.cardsInDeck.seer[i]) {
    		console.log($scope.cardkeeper.cardsInDeck.seer[i]);
			$scope.cardkeeper.cardsInDeck.normals ++;
    		$scope.cardkeeper.cardsInDeck.hand.push("Seer");
    	}

       	if ($scope.cardkeeper.cardsInDeck.peeker[i]) {
    		console.log($scope.cardkeeper.cardsInDeck.peeker[i]);
			$scope.cardkeeper.cardsInDeck.normals ++;
    		$scope.cardkeeper.cardsInDeck.hand.push("Little Girl");
    	}

       	if ($scope.cardkeeper.cardsInDeck.idiot[i]) {
    		console.log($scope.cardkeeper.cardsInDeck.idiot[i]);
			$scope.cardkeeper.cardsInDeck.normals ++;
    		$scope.cardkeeper.cardsInDeck.hand.push("Village Idiot");
    	}

       	if ($scope.cardkeeper.cardsInDeck.saver[i]) {
    		console.log($scope.cardkeeper.cardsInDeck.saver[i]);
			$scope.cardkeeper.cardsInDeck.normals ++;
    		$scope.cardkeeper.cardsInDeck.hand.push("Guardian Angel");
    	}

       	if ($scope.cardkeeper.cardsInDeck.judge[i]) {
    		console.log($scope.cardkeeper.cardsInDeck.judge[i]);
			$scope.cardkeeper.cardsInDeck.normals ++;
    		$scope.cardkeeper.cardsInDeck.hand.push("Judge");
    	}
    }

    function arrayShuffle(theArray) {
 	var len = theArray.length;
	var i = len;
	 while (i--) {
	 	var p = parseInt(Math.random()*len);
		var t = theArray[i];
  		theArray[i] = theArray[p];
	  	theArray[p] = t;
 	}
};
	arrayShuffle($scope.cardkeeper.cardsInDeck.hand);

    }

	$scope.hide1;
	$scope.specialCards = 0;

	$scope.counts = 4;
     $scope.change = function() {
        $scope.counts++;
      };

//create number options for amount of people playing
$scope.numbers = [];
for (var i = 0; i < 26; i++) {
		$scope.numbers.push(i);
}
//variables for defining Werewolf cards to user
	$scope.w = {
	villain: "Werewolf",
	alphaBadGuy: "Alpha Werewolf",
	hunter: "Hunter",
	seer: "Seer",
	peeker: "Little Girl",
	villageIdiot: "Village Idiot",
	saver: "Guardian Angel",
	judge: "Judge"
	};

//variables for defining Mafia cards
	$scope.m = {};
	$scope.m.villain = "Mafia";
	$scope.m.alphaBadGuy = "Godfather";
	$scope.m.hunter = "Detective";
	$scope.m.seer = "Detective";
	$scope.m.peeker = "Informant";
	$scope.m.villageIdiot = "Serial Killer";
	$scope.m.saver = "Guardian Angel";
	$scope.m.judge = "Judge";

$scope.adder = function () {
$timeout(
$scope.cardkeeper.currentCard++, 200);
return $scope.cardkeeper.currentCard;
}

//Gather special cards;

//Take all the cards and add to the special cards in an array;
//randomize data in the array;
//deal cards;

});


