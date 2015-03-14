(function () {
  'use strict';

  angular.module('cardStackUI', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/alumni', {
        templateUrl: 'assets/views/cardStack/alumniCardView.html',
        controller: 'CardController as cardCtrl'
      })
      .when('/employers', {
        templateUrl: 'assets/views/cardStack/employersCardView.html',
        controller: 'CardController as cardCtrl'
      })
      .when('/jobs', {
        templateUrl: 'assets/views/cardStack/jobsCardView.html',
        controller: 'CardController as cardCtrl'
      })
      .when('/not-found', {
        templateUrl: 'assets/views/notFoundView.html',
        controller: 'CardController as cardCtrl'
      })
      .otherwise({
        redirectTo: '/not-found'
      });
  });
})();