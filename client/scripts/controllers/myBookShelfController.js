myApp.controller('MyBookShelfController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('MyBookShelfController loaded');
  $scope.logout = UserService.logout;
  // $scope.search = {};

  $scope.searchForBook = function(bookInput) {
      console.log("button clicked", bookInput);
  };

  // connect controller data to factory data here

}]);
