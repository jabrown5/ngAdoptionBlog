console.log('the best adoption blog api ever!');

angular.module('adoptionBlog', [ 'ngRoute'
]).config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {

    // gets rid of the hash in the http url
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        })

        $routeProvider
            .when('/', {
                templateUrl: 'ngViews/home.html',
                controller: 'PostsCtrl'
            })
            .when('/create' , {
                templateUrl: 'ngViews/create.html',
                controller: 'AdminCreateCtrl'
            })
            .when('/admin', {
                templateUrl: 'ngViews/admin.html',
                controller: 'AdminDeleteCtrl'
            })
            .when('/cats', {
                templateUrl: 'ngViews/cat.html',
                controller: 'CatsCtrl'
            })
            .when('/dogs', {
                templateUrl: 'ngViews/dog.html',
                controller: 'DogsCtrl'
            })

        $routeProvider.otherwise({ redirectTo: '/' });
    }
]);