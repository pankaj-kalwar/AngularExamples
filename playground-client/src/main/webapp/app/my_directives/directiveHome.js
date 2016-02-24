angular.module("play.directiveHome", []);

angular.module('play.directiveHome').controller('directiveHomeCtrl', function(){
	console.log("inside Directive controller.");
})

/*-- Another Controller for form directive example*/
.controller('DirectiveFormCtrl', ['$scope', function($scope){
	console.log("inside Directive Form controller.");
	
	$scope.userType = "Test data ";
}])

/*--- Custom Directive Sample Codes---*/
/*-- Restriction : Element*/
.directive('pkDirectiveElement', function(){
	return {
	    restrict: 'E', // can be E, A, C
	    template: '<strong>Custom Directive - Restrict "Element"</strong>'
	  };
})

/*-- Restriction : Attribute */
.directive('pkDirectiveAttribute', function(){
	return {
	    restrict: 'A', // can be E, A, C
	    template: '<strong>Custom Directive - Restrict "Attribute"</strong>'
	  };
})

.directive('pkDirective', function(){
	return {
	    restrict: 'A',
	    template: '<input type="text" ng-model="userTypeA" />{{userTypeA}}',
	    scope: {
	    	userTypeA: '=info'
	    }
	  };
});