"use strict";

app.controller('BookCtrl', function($scope,GuideFactory){
  $scope.guides = {};
  GuideFactory
    .then(function(guideData) {
      $scope.guides = guideData.guides;
    });
});
