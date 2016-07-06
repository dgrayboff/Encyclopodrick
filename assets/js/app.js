var mainApp = angular.module('mainApp', []);

mainApp.controller('tabController', function ($scope, $http) {

  $scope.tab = function (tabId) {

    $http({
      method: 'GET',
      url: 'http://anapioficeandfire.com/api/characters/' + tabId
    }).then(function successCallback(response) {
      console.log(response);
      $scope.charinfo = response.data;
      $scope.chartitles = response.data.aliases;
      // for (var i = 0; i < response.data.aliases; i++) {
      //   $scope.chartitles = response.data.aliases[i]
      //   console.log(response.data.aliases[i]);
      //   console.log(response.data.aliases[0]);
      // }
    })

    $scope.hideMain = true;
    $scope.hideInfo = true;

    if (tabId === 827) {
      console.log("Podrick!");
      $scope.charimage = "https://thoughtcatalog.files.wordpress.com/2014/06/screen-shot-2014-06-11-at-8-22-04-pm.png?w=1140&h=636";
    }
    if (tabId === 583) {
      console.log("Jon!");
      $scope.charimage = "http://media.comicbook.com/2016/06/jonsnow-186144.jpg";
    }
    if (tabId === 1303) {
      console.log("Daenerys!");
      $scope.charimage = "http://lovelace-media.imgix.net/uploads/1461/5ab5c3f0-c238-0133-bf51-0e694d25c22d.jpg?";
    }
    if (tabId === 1319) {
      console.log("Davos!");
      $scope.charimage = "http://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/article_main_wide_image/public/2016/04/game-of-thrones-liam-cunningham-davos-season-6.jpg?itok=bQj48sHe";
    }
    if (tabId === 148) {
      console.log("Arya!");
      $scope.charimage = "http://images.en.yibada.com/data/thumbs/full/94684/685/0/0/0/arya-stark-played-by-maisie-williams-is-expected-to-have-several-action-sequences-in-game-of-thrones-season-6.jpg";
    }
    if (tabId === 1052) {
      console.log("Tyrion!");
      $scope.charimage = "http://images.fashionnstyle.com/data/images/full/148414/tyrion-lannister.jpg?w=600";
    }
  };
});
