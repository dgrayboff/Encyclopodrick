var mainApp = angular.module('mainApp', []);

// mainApp.controller('myCtrl', function($scope, $http){
//
//   // $http get from API, based on which character you click
//   // ng-click / ng-show
//   // separate gets for each character?
//
//
//
// });

mainApp.controller('tabController', function ($scope) {
  $scope.tab = function (tabId) {
    if (tabId === 1) {
      console.log("Podrick!")
    }
    if (tabId === 2) {
      console.log("Jon!")
    }
    if (tabId === 3) {
      console.log("Daenerys!")
    }
    if (tabId === 4) {
      console.log("Davos!")
    }
    if (tabId === 5) {
      console.log("Arya!")
    }
    if (tabId === 6) {
      console.log("Tyrion!")
    }
  };
});
