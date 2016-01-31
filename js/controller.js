angular.module('schoolControllers', [])
.controller('NewsListController', function($scope, NewsListService) {
	var promise = NewsListService.getNews();
	promise.then(function (news) {
		$scope.newsList = news.data;
	});
})
.controller("ContactController", function($scope) {
	$scope.map = {
		address: "Grange Manor Drive, Rathfarnham, Dublin 16, Ireland",
		zoom: 14,
		width: 400
	}

	$scope.contact = {};
	$scope.result = "hidden";
	$scope.submitButtonDisabled = false;
	
	var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

	$scope.submit = function(contactform) {
		if (phoneRegex.test(inputPhone.value)) {
            $scope.submitButtonDisabled = true;
            $scope.resultMessage = "Message would be sent if this was a real contact form";
            $scope.result = "bg-success";
        } else {
            // Invalid input  
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = "Phone number "+inputPhone.value+" is not in a valid format";
            $scope.result='bg-danger';            
        }
	}
})