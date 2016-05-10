angular.module("play.upload", ["ng.deviceDetector"]);

angular.module("play.upload")

.controller('uploadCtrl', ['$scope', 'fileUpload', function($scope, fileUpload){
    
    $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log('file is ' );
        console.dir(file);
        var uploadUrl = "/fileUpload";
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };
    
    // Detect file input support
    $scope.isFileInputSupported = (function () {
      // Handle devices which falsely report support
      if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) {
        return false;
      }
      // Create test element
      var el = document.createElement("input");
      el.type = "file";
      return !el.disabled;
    })();

    // Add 'fileinput' class to html element if supported
    if (isFileInputSupported) {
      document.documentElement.className += " fileinput";
    }
    
}])

// Used to detect the device 
.controller('deviceDetectCtrl',['deviceDetector',function(deviceDetector){
    var vm = this;
    vm.data = deviceDetector;
    vm.allData = JSON.stringify(vm.data, null, 2);
}])

.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}])

.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(response){
        	console.log(response);
        })
        .error(function(response){
        	console.log(response);
        });
    };
}]);

// Test if permission denied by user 
//  http://stackoverflow.com/questions/15993581/reprompt-for-permissions-with-getusermedia-after-initial-denial



