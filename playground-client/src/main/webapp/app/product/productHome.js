angular.module("play.productHome", []);

angular.module('play.productHome')
.controller('productHomeCtrl', ['$scope', function($scope){
	console.log("inside product controller.");
	
	$scope.books = [{
			name : "Java",
			description : "OCJP",
			price : 100
		},
		{
			name : "Java1",
			description : "OCJP1",
			price : 200
		}];
	
	$scope.color = {
			name : 'blue'
		};
		$scope.specialValue = {
			"id" : "12345",
			"value" : "green"
		};
	
}]);

