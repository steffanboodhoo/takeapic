
angular.module('pic',['webcam'])

.controller('picCtrl',['$scope',
	function($scope){
		constraints = { audio: true, video: true };
		var promise = navigator.mediaDevices.getUserMedia(constraints);
		$scope.myChannel = {
		    // the fields below are all optional
		    videoHeight: 800,
		    videoWidth: 600,
		    video: null // Will reference the video element on success
		  };
		
	}
])
