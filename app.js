var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/blog/', {
    templateUrl : 'pages/blog.html',
    controller  : 'BlogController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
  $scope.logo = 'assets/logo.png';
});

app.controller('BlogController', function($scope) {
  $scope.message = 'Hello from BlogController';
  $scope.logo = 'assets/logo.png';
});


