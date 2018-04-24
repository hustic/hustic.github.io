var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/blog', {
    templateUrl : 'pages/blog.html',
    controller  : 'BlogController'
  })

  .when('/pport', {
    templateUrl : 'pages/pport.html',
    controller  : 'PController'
  })

  .when('/aport', {
    templateUrl : 'pages/aport.html',
    controller  : 'AController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
  $scope.message = 'Hello from HomeController';
  $scope.logo = '/logo.png';
});

app.controller('BlogController', function($scope) {
  $scope.message = 'Hello from BlogController';
  $scope.logo = '/logo.png';
});

app.controller('AController', function($scope) {
  $scope.message = 'Hello from AboutController';
  $scope.logo = '/logo.png';
});

app.controller('PController', function($scope) {
  $scope.message = 'Hello from AboutController';
  $scope.logo = '/logo.png';
});