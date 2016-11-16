/**
 * Created by jenniferbrown on 11/16/16.
 */
angular.module('adoptionBlog')
    .controller('DogsCtrl', function($scope, $http) {

        $scope.dogs = [];

        $scope.fetch = function() {
            $http.get('http://localhost:9292/dogs').success(function(results) {
                $scope.dogs = results
            }).error(function(err) {
                console.log('Fetch failed')
            })
        }

        $scope.fetch();

    });