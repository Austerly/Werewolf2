'use strict';

angular.module('werewolfApp').controller('MainCtrl',
 function($scope){
	//Logic variables declared
	$scope.test = "Werewolf";
	$scope.falser = false;
	$scope.gameTitleInput;
	$scope.gameTitle = "What game are we playing today?";
	$scope.totalCards = 1;
	$scope.currentCard = 1;
	$scope.cardsInDeck = 0;
	$scope.hide1;
	$scope.specialCards = 0;

	//role variables for cards
	$scope.badGuy = {
		one: true, 
		two: true,
		Three: false,
		Four: false,
		super: false
	};
	$scope.defender = {
		one: true,
		two: false
	};
	$scope.special = {
		seer: true,
		peeker: false,
		idiot: false, 
		saver: false,
		judge: false
	}

	$scope.counts = 4;
     $scope.change = function() {
        $scope.counts++;
      };
	$scope.totalCardsInDeck = $scope.cardsInDeck + $scope.counts;
//create number options for amount of people playing
$scope.numbers = [];
for (var i = 0; i < 26; i++) {
		$scope.numbers.push(i);
}
//variables for defining Werewolf cards
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
	// $scope.w.villain = "Werewolf";
	// $scope.w.alphaBadGuy = "Alpha Werewolf";
	// $scope.w.hunter = "Hunter" ;
	// $scope.w.seer = "Seer";
	// $scope.w.peeker = "Little Girl";
	// $scope.w.villageIdiot = "Village Idiot";
	// $scope.w.saver = "Guardian Angel";
	// $scope.w.judge = "Judge";
console.log($scope.w);

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

/* 
**********JQUERY SECTION, FOR SAKE OF TIME, DUE TO ISSUES WITH ANGULAR *********
*/

//Gather special cards;

//Take all the cards and add to the special cards in an array;
//randomize data in the array;
//deal cards;
	var hand;
	var counter = $scope.w.length;
	var wCards = $scope.w;

	$scope.card = {};

$(document).ready(function () {

	$('#nextCard').click(function() {

		var badGuy = $scope.badGuy;


		for (i=0; i > counter; i++) 
		{
			alert("for works");

			if (badGuy[i]) 
			{
				hand.push(badGuy[i]);
				console.log(hand);
				console.log("cardCounter");
				alert("doggone it!");
			}

			else 
			{
			console.log("no dice");
			}
		};
	});
});

});


