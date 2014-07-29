'use strict';

angular.module('werewolfApp').controller('MainCtrl',
 function($scope){
	//Everything happens here:
	$scope.test = "Hello World";
	$scope.scender = "cows";
	$scope.gameTitleInput;
	$scope.gameTitle = "What game are we playing today?";
	$scope.totalCards = 1;
	$scope.currentCard = 1;
	$scope.cardsInDeck;
});