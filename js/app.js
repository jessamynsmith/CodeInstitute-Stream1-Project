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
.filter('nl2br', function($sce){
    return function(msg,is_xhtml) { 
        var is_xhtml = is_xhtml || true;
        var breakTag = (is_xhtml) ? '<br />' : '<br>';
        var msg = (msg + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
        return $sce.trustAsHtml(msg);
    }
});