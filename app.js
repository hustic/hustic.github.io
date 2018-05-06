var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
  $scope.message = 'Hello from HomeController';
  $scope.logo = 'assets/logo.png';

  $scope.changeColor = function(person, bool) {
    if(bool === true) {
        $scope.personColour = {color: '#'+person.colour};
    } else if (bool === false) {
        $scope.personColour = {color: 'white'}; //or, whatever the original color is
    }
};
});


