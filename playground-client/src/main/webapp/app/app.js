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
