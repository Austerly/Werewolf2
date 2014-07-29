'use strict';

angular.module('werewolfApp').controller('MainCtrl',
 function($scope){
	//Logic variables declared
	$scope.test = "Hello World";
	$scope.scender = "cows";
	$scope.gameTitleInput;
	$scope.gameTitle = "What game are we playing today?";
	$scope.totalCards = 1;
	$scope.currentCard = 1;
	$scope.cardsInDeck = "?";
	$scope.hide1;

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

//create number options for amount of people playing
$scope.numbers = [];
for (var i = 0; i < 26; i++) {
		$scope.numbers.push(i);
		console.log($scope.numbers);
}
//variables for defining Werewolf cards
	$scope.w = {};
	$scope.w.villain = "Werewolf";
	$scope.w.alphaBadGuy = "Alpha Werewolf";
	$scope.w.hunter = "Hunter" ;
	$scope.w.seer = "Seer";
	$scope.w.peeker = "Little Girl";
	$scope.w.villageIdiot = "Village Idiot";
	$scope.w.saver = "Guardian Angel";
	$scope.w.judge = "Judge";

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
	console.log("I like the Mafia!")

});