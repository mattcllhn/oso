myApp.controller('MyBookShelfController', ['$scope', '$http', '$location', 'UserService', 'ApiService', function($scope, $http, $location, UserService, ApiService) {
  console.log('MyBookShelfController loaded');
  $scope.logout = UserService.logout;
  // $scope.search = {};

  $scope.findBook = function(bookToSearch) {
      console.log("button clicked", bookToSearch);
      var book = bookToSearch;
      ApiService.getBooks(book);
  };

  // connect controller data to factory data here

}]);
