angular.module("play.scopes", []);

angular.module("play.scopes").config(['$routeProvider', function($routeProvider){
	console.log("clientContextPath == "+clientContextPath+"##444");
	$routeProvider.when('/', {
		template : "<pre>Welcome To Home Page<br />Cilck on File Upload link </pre>",
		controller : 'scopeDashboardCtrl' 
	}).when('/fileUpload', {
		templateUrl : clientContextPath + "/app/fileUpload/uploadData.jspf",
		controller : 'uploadCtrl' 
	}).otherwise({
		redirectTo : "/"
	});
}]);

angular.module('play.scopes').controller('scopeDashboardCtrl', function(){
	console.log("inside scope controller.");
});