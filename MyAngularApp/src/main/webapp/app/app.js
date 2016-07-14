angular.module('app', [
    'ngRoute',
    'ngResource',
    'play.common'    
 ]);

angular.module('app').controller('PlayCtrl', ['$route', '$rootScope', '$scope','$window', 
    function ($route,  $rootScope, $scope,$window) {
        $rootScope.clientContextPath = clientContextPath;
    }
]);
/*
angular.module('app').config('$routeProvider', function($routeProvider){
	$routeProvider
		.when("/home", function(){
			templateUrl : 
		}).otherwise(function(){
			
		});
});

*/