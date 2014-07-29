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
	$scope.cardsInDeck;

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
$scope.numbers = [];
for (var i = 0; i < 26; i++) {
		$scope.numbers.push(i);
		console.log($scope.numbers);
}
	$scope.villain;
	$scope.alphaBadGuy;
	$scope.hunter;
	$scope.seer;
	$scope.peeker;
	$scope.villageIdiot;
	$scope.saver;
	$scope.judge = "Judge";

	$scope.equal = function(stuff) {
		// $scope.gameTitle = $scope.gameTitleInput;

		// titleofGame = $scope.gameTitle;
		var nameOfGame = stuff;
		// werewolf = $scope.werewolf;
		// mafia = $scope.mafia;
console.log($scope.gameTitle);
console.log($scope.gameTitleInput);


			if (nameOfGame === "Werewolf") {
				$scope.villain = "Werewolf";
				$scope.alphaBadGuy = "Alpha Werewolf";
				$scope.hunter = "Hunter" ;
				$scope.seer = "Seer";
				$scope.peeker = "Little Girl";
				$scope.villageIdiot = "Village Idiot";
				$scope.saver = "Guardian Angel";
				console.log("I like Werewolfs!");


			}

			//if gameTitle = Mafia, give mafia options for the cards
			else if (nameOfGame === "Mafia") {
				$scope.villain = "Mafia";
				$scope.alphaBadGuy = "Godfather";
				$scope.hunter = "Detective";
				$scope.seer = "Detective";
				$scope.peeker = "Informant";
				$scope.villageIdiot = "Serial Killer";
				$scope.saver = "Guardian Angel";
				console.log("I like the Mafia!")


			}


	};




});