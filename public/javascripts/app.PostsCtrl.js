/**
 * Created by jenniferbrown on 11/16/16.
 */
angular.module('adoptionBlog')
    .controller('PostsCtrl', function($scope, $http) {

        $scope.posts = [];

        $scope.fetch = function() {
            $http.get('http://localhost:9292/blogs').success(function(results) {
                $scope.posts = results
            }).error(function(err) {
                console.log('Fetch failed')
            })
        }

        $scope.fetch();

    });