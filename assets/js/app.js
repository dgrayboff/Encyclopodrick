var mainApp = angular.module('mainApp', []);

mainApp.controller('tabController', function ($scope, $http) {

  $scope.tab = function (tabId) {

    $http({
      method: 'GET',
      url: 'http://anapioficeandfire.com/api/characters/' + tabId
    }).then(function successCallback(response) {
      console.log(response);
      $scope.charinfo = response.data;
    });

    if (tabId === 827) {
      console.log("Podrick!")
    }
    if (tabId === 583) {
      console.log("Jon!")
    }
    if (tabId === 1303) {
      console.log("Daenerys!")
    }
    if (tabId === 1319) {
      console.log("Davos!")
    }
    if (tabId === 148) {
      console.log("Arya!")
    }
    if (tabId === 1052) {
      console.log("Tyrion!")
    }
  };
});
