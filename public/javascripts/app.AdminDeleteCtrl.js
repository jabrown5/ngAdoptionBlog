/**
 * Created by jenniferbrown on 11/16/16.
 */
angular.module('adoptionBlog')
    .controller('AdminDeleteCtrl', function($scope, $http) {
        $scope.url = 'http://localhost:9292/blogs/';
        $scope.posts = [];

        $scope.fetch = function() {
            $http.get($scope.url).success(function(results) {
                $scope.posts=results;
            }).error(function(err){
                console.log(err)
            });
        };

        $scope.removeBlogEntry = function(blog) {
            console.log(blog);
            var sure = confirm("Are you sure you'd like to delete this post?");
            if (sure) {
                $http.delete($scope.url + blog.id).success(function(result) {
                    $scope.fetch() // auto updates the blog list
                }).error(function(err) {
                    console.log(err);
                });
            }
        };

        $scope.fetch();
    });