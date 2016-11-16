/**
 * Created by jenniferbrown on 11/16/16.
 */
angular.module('adoptionBlog')
    .controller('AdminCreateCtrl', function($scope, $http) {

        $scope.messages = [
            'Please fill out all fields.',
            'Thanks for your post! View the blog to see it live!'
        ];

        $scope.message = $scope.messages[0];

        $scope.createPost = function(title, contents, tags) {
          $http({
              url: 'http://localhost:9292/blogs',
              method: 'POST',
              params: { title: title, contents: contents, tags: tags}
          }).success(function(result) {
              $scope.message = $scope.messages[1];  // IS NOT WORKING
              // $scope.title = '';  //will clear out title
          }).error(function(err) {
              console.log('Ajax request did not work');
              console.log(err);
          })
        };


    })