var app = angular.module('hustic', ['ngAnimate']);

app.controller('particlesCtrl', ['$scope', particlesCtrl]);
app.directive('particlesDrv', ['$window', '$log', particlesDrv]);

app.controller('repeatController', function($scope) {
  $scope.friends = [
    {name:'John', age:25, gender:'boy'},
    {name:'Jessie', age:30, gender:'girl'},
    {name:'Johanna', age:28, gender:'girl'},
    {name:'Joy', age:15, gender:'girl'},
    {name:'Mary', age:28, gender:'girl'},
    {name:'Peter', age:95, gender:'boy'},
    {name:'Sebastian', age:50, gender:'boy'},
    {name:'Erika', age:27, gender:'girl'},
    {name:'Patrick', age:40, gender:'boy'},
    {name:'Samantha', age:60, gender:'girl'}
  ];
});



var friends = element.all(by.repeater('friend in friends'));

it('should render initial data set', function() {
  expect(friends.count()).toBe(10);
  expect(friends.get(0).getText()).toEqual('[1] John who is 25 years old.');
  expect(friends.get(1).getText()).toEqual('[2] Jessie who is 30 years old.');
  expect(friends.last().getText()).toEqual('[10] Samantha who is 60 years old.');
  expect(element(by.binding('friends.length')).getText())
      .toMatch("I have 10 friends. They are:");
});

 it('should update repeater when filter predicate changes', function() {
   expect(friends.count()).toBe(10);

   element(by.model('q')).sendKeys('ma');

   expect(friends.count()).toBe(2);
   expect(friends.get(0).getText()).toEqual('[1] Mary who is 28 years old.');
   expect(friends.last().getText()).toEqual('[2] Samantha who is 60 years old.');
 });



function menu() {
    var x = document.getElementById("menu");
    var y = document.getElementById("particles-js");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.backgroundImage = "url('')";
    } else {
        x.style.display = "none";
        y.style.backgroundImage = "url('./assets/logo.png')";
    }
} 


/* ==========================================================================*/

function particlesCtrl($scope) {
  $scope.showParticles = true;
}

function particlesDrv($window, $log) {
  return {
    restrict: 'A',
    template: '<div class="particles-js" id="particles-js"></div>',
    link: function(scope, element, attrs, fn) {
      $log.debug('test');
      $window.particlesJS('particles-js',
  
  {
  "particles": {
    "number": {
      "value": 200,
      "density": {
        "enable": true,
        "value_area": 600
      }
    },
    "color": {
      "value": ["#d25145", "#ecb74e", "#9fc8b8"]
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 7
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 3.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 50,
      "color": "#0b0e09",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 90,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 150,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
}
};
}