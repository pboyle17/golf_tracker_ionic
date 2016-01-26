// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('todo', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('TodoCtrl',function($scope, $ionicModal){
  $scope.tasks = [
    {
	"distance": 10,
	"fairway": 2.18,
	"rough": 2.34,
	"sand": 2.43,
	"recovery": 3.45
}, {
	"distance": 20,
	"fairway": 2.4,
	"rough": 2.59,
	"sand": 2.53,
	"recovery": 3.51
}, {
	"distance": 30,
	"fairway": 2.52,
	"rough": 2.70,
	"sand": 2.66,
	"recovery": 3.57
}, {
	"distance": 40,
	"fairway": 2.6,
	"rough": 2.78,
	"sand": 2.82,
	"recovery": 3.71
}, {
	"distance": 50,
	"fairway": 2.66,
	"rough": 2.87,
	"sand": 2.92,
	"recovery": 3.79
}, {
	"distance": 60,
	"fairway": 2.7,
	"rough": 2.91,
	"sand": 3.15,
	"recovery": 3.83
}, {
	"distance": 70,
	"fairway": 2.72,
	"rough": 2.93,
	"sand": 3.21,
	"recovery": 3.84
}, {
	"distance": 80,
	"fairway": 2.75,
	"rough": 2.96,
	"sand": 3.24,
	"recovery": 3.84
}, {
	"distance": 90,
	"fairway": 2.77,
	"rough": 2.99,
	"sand": 3.24,
	"recovery": 3.82
}, {
	"distance": 100,
	"fairway": 2.8,
	"rough": 3.02,
	"sand": 3.23,
	"recovery": 3.8
}, {
	"distance": 120,
	"fairway": 2.85,
	"rough": 3.08,
	"sand": 3.21,
	"recovery": 3.78
}, {
	"distance": 140,
	"fairway": 2.91,
	"rough": 3.15,
	"sand": 3.22,
	"recovery": 3.8
}, {
	"distance": 160,
	"fairway": 2.98,
	"rough": 3.23,
	"sand": 3.28,
	"recovery": 3.81
}, {
	"distance": 180,
	"fairway": 3.08,
	"rough": 3.31,
	"sand": 3.4,
	"recovery": 3.82
}, {
	"distance": 200,
	"fairway": 3.19,
	"rough": 3.42,
	"sand": 3.55,
	"recovery": 3.87
}, {
	"distance": 220,
	"fairway": 3.32,
	"rough": 3.53,
	"sand": 3.7,
	"recovery": 3.92
}, {
	"distance": 240,
	"fairway": 3.45,
	"rough": 3.64,
	"sand": 3.84,
	"recovery": 3.97
}, {
	"distance": 260,
	"fairway": 3.58,
	"rough": 3.74,
	"sand": 3.93,
	"recovery": 4.03
}, {
	"distance": 280,
	"fairway": 3.69,
	"rough": 3.83,
	"sand": 4,
	"recovery": 4.1
}, {
	"distance": 300,
	"fairway": 3.78,
	"rough": 3.9,
	"sand": 4.04,
	"recovery": 4.2
}, {
	"distance": 320,
	"fairway": 3.84,
	"rough": 3.95,
	"sand": 4.12,
	"recovery": 4.31
}, {
	"distance": 340,
	"fairway": 3.88,
	"rough": 4.02,
	"sand": 4.26,
	"recovery": 4.44
}, {
	"distance": 360,
	"fairway": 3.95,
	"rough": 4.11,
	"sand": 4.14,
	"recovery": 4.56
}, {
	"distance": 380,
	"fairway": 4.03,
	"rough": 4.21,
	"sand": 4.55,
	"recovery": 4.66
}, {
	"distance": 400,
	"fairway": 4.11,
	"rough": 4.3,
	"sand": 4.69,
	"recovery": 4.75
}, {
	"distance": 420,
	"fairway": 4.19,
	"rough": 4.4,
	"sand": 4.83,
	"recovery": 4.84
}, {
	"distance": 440,
	"fairway": 4.27,
	"rough": 4.49,
	"sand": 4.97,
	"recovery": 4.94
}, {
	"distance": 460,
	"fairway": 4.34,
	"rough": 4.58,
	"sand": 5.11,
	"recovery": 5.03
}, {
	"distance": 480,
	"fairway": 4.42,
	"rough": 4.68,
	"sand": 5.25,
	"recovery": 5.13
}, {
	"distance": 500,
	"fairway": 4.5,
	"rough": 4.77,
	"sand": 5.4,
	"recovery": 5.22
}, {
	"distance": 520,
	"fairway": 4.58,
	"rough": 4.87,
	"sand": 5.54,
	"recovery": 5.32
}, {
	"distance": 540,
	"fairway": 4.66,
	"rough": 4.96,
	"sand": 5.68,
	"recovery": 5.41
}, {
	"distance": 560,
	"fairway": 4.74,
	"rough": 5.06,
	"sand": 5.82,
	"recovery": 5.51
}, {
	"distance": 580,
	"fairway": 4.82,
	"rough": 5.15,
	"sand": 5.96,
	"recovery": 5.6
}, {
	"distance": 600,
	"fairway": 4.89,
	"rough": 5.25,
	"sand": 6.10,
	"recovery": 5.7
}
  ];
});

window.onload=function(){
  var average=document.getElementById('10 yards').value;
  console.log(average);
  var p = document.getElementById('10-avg-value');
  p.innerHTML=average + ' shots';
}
