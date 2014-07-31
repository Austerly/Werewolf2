'use strict';

angular.module('werewolfApp').controller('MainCtrl',
 function($scope, cardKeeper, shuffler){

	//Logic variables declared
	$scope.cardkeeper = cardKeeper;
	$scope.shuffle = shuffler;
	$scope.test = "Werewolf";
	$scope.falser = false;
	$scope.gameTitleInput;
	$scope.gameTitle = "What game are we playing today?";
	$scope.totalCards = 1;
	$scope.cardkeeper.currentCard = 1;
	$scope.cardkeeper.cardsInDeck = 1;

//create shuffling app
	//declare variables to keep track of how many cards, and the deck being used;
	$scope.cardkeeper.counter = 0;
	$scope.cardkeeper.hand;
$scope.cardkeeper.tester = parseInt($scope.cardkeeper.cardsInDeck);
	//create for loop to localize all cards being played with in the hand;
	$scope.cardkeeper.deck = function () {
		for (i = 0; i < 4; i++) {
			if (cardkeeper.badGuy[i] === true) {
				cardkeeper.counter ++;
				cardkeeper.hand.push(cardkeeper.badGuy[i]);
				console.log(cardkeeper.hand);
			}
		}
	}
	$scope.cardkeeper.logger = function () {
		console.log($scope.cardkeeper);
	}
$scope.cardkeeper.total = parseInt($scope.cardkeeper.cardsInDeck) + ($scope.counts);


	$scope.hide1;
	$scope.specialCards = 0;

	//role variables for cards
	$scope.cardkeeper.badGuy = {
		one: true, 
		two: true,
		Three: false,
		Four: false,
		super: false
	};
	$scope.cardkeeper.defender = {
		one: true,
		two: false
	};
	$scope.cardkeeper.special = {
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


//Gather special cards;

//Take all the cards and add to the special cards in an array;
//randomize data in the array;
//deal cards;
	var hand;
	var counter = $scope.w.length;
	var wCards = $scope.w;

	$scope.card = {};

});


