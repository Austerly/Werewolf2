'use strict';

(function(){
  var werewolfApp = angular.module('werewolfApp',['ui.router'])
  werewolfApp.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise(function ($injector, $location) {
      return ("/form");
    });

    $stateProvider
    .state('form', {
    url:"/form",
    templateUrl: "views/form.html"
    })

    .state('cheatProtect', {
      url: '/cheatProtect',
      templateUrl: 'views/cheatProtect.html'
    })

     .state('form2', {
    url:"/form2",
    templateUrl: "views/form2.html"
    })
     .state('card', {
    url:"/card",
    templateUrl: "views/card.html"
    })
     .state('home', {
    url:"/home",
    templateUrl: "views/main.html"
    })
     .state('endOfShuffle', {
    url:"/endOfShuffle",
    templateUrl: "views/endOfGame.html"
    })
     .state('main', {
    url:"/main",
    templateUrl: "views/main.html"
    })

  });
  // setTimeout(function(){
  //  var oldHash = window.location.hash
  //  console.log('manually triggering a hash change event in a hacky way')
  //  window.location.hash = '#asdf';
  //  window.location.hash = oldHash;
  // },1000)

  
})();
