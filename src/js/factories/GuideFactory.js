"use strict";

app.factory('GuideFactory', function($q,$http){
  return $q(function(resolve,reject){
    $http.get('./src/js/data/guides.json')
      .success(function(guideData){
        resolve(guideData);
      })
      .error(function(error){
        console.error(error);
        reject(error);
      });
  });
});
