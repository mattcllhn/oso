myApp.controller('MyBookShelfController', ['$scope', '$http', '$location', 'UserService', 'ApiService', function($scope, $http, $location, UserService, ApiService) {
  console.log('MyBookShelfController loaded');
  $scope.logout = UserService.logout;
  // $scope.search = {};

  $scope.searchForBook = function(bookInput) {
      console.log("button clicked", bookInput);
  };

  // connect controller data to factory data here

}]);
