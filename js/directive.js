angular.module('schoolDirectives', [])
.directive('schoolNav', function() {
    return {
        restrict: 'AE',
        templateUrl: 'templates/directives/schoolNav.html'
    };
})
.directive('schoolFooter', function() {
    return {
        restrict: 'AE',
        templateUrl: 'templates/directives/schoolFooter.html'
    }
});