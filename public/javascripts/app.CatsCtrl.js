/**
 * Created by jenniferbrown on 11/16/16.
 */
angular.module('adoptionBlog')
    .controller('CatsCtrl', function($scope, $http) {

        $scope.cats = [];

        $scope.fetch = function() {
            $http.get('http://localhost:9292/cats').success(function(results) {
                $scope.cats = results
            }).error(function(err) {
                console.log('Fetch failed')
            })
        }

        $scope.fetch();

    });