angular.module("play.scopes", []);

angular.module("play.scopes").config(['$routeProvider', function($routeProvider){
	console.log("clientContextPath == "+clientContextPath+"##444");
	$routeProvider.when('/', {
		//templateUrl : clientContextPath + "/app/scopes/scope-dashboard.jspf",
		template : "<pre>Testing My templates 11......</pre>",
		controller : 'scopeDashboardCtrl' 
	}).when('/scopes', {
		templateUrl : clientContextPath + "/app/scopes/scope-dashboard.jspf",
		//template : "<pre>Testing Scopes....</pre>",
		controller : 'scopeDashboardCtrl' 
	}).when('/testDirectives', {
		templateUrl : clientContextPath + "/app/my_directives/directiveHome.jspf",
		//template : "<pre>Testing Scopes....</pre>",
		controller : 'directiveHomeCtrl' 
	}).otherwise({
		redirectTo : "/"
	});
}]);

angular.module('play.scopes').controller('scopeDashboardCtrl', function(){
	console.log("inside scope controller.");
	alert(111);	
});