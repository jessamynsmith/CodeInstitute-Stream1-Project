var app = angular.module('schoolApp', ['ngRoute','schoolControllers','schoolDirectives'])
.config(function($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "templates/home.html"
        })
        .when("/news", {
            templateUrl: "templates/news.html",
            controller: "NewsListController"
        })
        .when("/news/:newsId", {
            templateUrl: "templates/news.html",
            controller: "NewsListController"
        })
        .when("/info/greenschools", {
            templateUrl: "templates/info/greenschools.html"
        })
        .when("/info/booklists", {
            templateUrl: "templates/info/booklists.html"
        })
        .when("/contact", {
            templateUrl: "templates/contact.html",
        })
        .otherwise({
            redirectTo: '/home'
        });
})