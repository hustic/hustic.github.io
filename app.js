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

app.controller('particlesCtrl', ['$scope', particlesCtrl]);
app.directive('particlesDrv', ['$window', '$log', particlesDrv]);


function particlesCtrl($scope) {
  $scope.showParticles = true;
}

function particlesDrv($window, $log) {
  return {
    restrict: 'A',
    template: '<div class="particleJs" id="particleJs"></div>',
    link: function(scope, element, attrs, fn) {
      $log.debug('test');
      $window.particlesJS('particleJs', {
     particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#FFFFFF'
          },
          shape: {
            type: "circle",
            polygon: {
              nb_sides: 5
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
    }
  };
}


