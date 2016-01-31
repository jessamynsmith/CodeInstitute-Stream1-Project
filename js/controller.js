angular.module('schoolControllers', [])
.controller('NewsListController', function($scope, NewsListService) {
	var promise = NewsListService.getNews();
	promise.then(function (news) {
		$scope.newsList = news.data;
	});
})
.controller('NewsItemController', function($scope, $location, $routeParams, NewsListService) {
	var promise = NewsListService.getNews();
	var id = $routeParams.newsId;
	promise.then(function (news) {
		var newsList = news.data;
		for (var i = 0, len = newsList.length; i < len; i += 1) {
			if (newsList[i].id === id) {
				$scope.item = newsList[i];
			}
		}
	});
})