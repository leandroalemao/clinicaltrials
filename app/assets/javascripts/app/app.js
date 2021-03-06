var ctApp = angular.module('ClinicalTrials', ['ngRoute', 'ui.bootstrap', 'templates', 'ngAnimate', 'angular-loading-bar'])

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/dashboard', {
    templateUrl: 'dashboard.html',
    controller: 'DashboardController'
  })
  .when('/trials', {
    templateUrl: 'trials.html',
    controller: 'TrialsController'
  })
  .otherwise({ redirectTo: '/dashboard' });

  $locationProvider.html5Mode(true);

}]);
