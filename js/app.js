var app=angular.module('critique',[]);

app.controller('searchCtrl',function($scope,$http){

	$scope.getmovie=function() {
	      $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
	      .then(function(response){ 
	      	$scope.details = response.data; 
	      });
    };

});