angular.module('schoolControllers', [])
.controller('NewsListController', function($scope, NewsListService) {
	var promise = NewsListService.getNews();
	promise.then(function (news) {
		$scope.newsList = news.data;
	});
})