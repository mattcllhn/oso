myApp.controller('MyBookShelfController', ['$scope', '$http', '$location', 'UserService', 'ApiService', function($scope, $http, $location, UserService, ApiService) {
  console.log('MyBookShelfController loaded');
  $scope.logout = UserService.logout;

  $scope.findBook = function() {
      // var isbn is the input from user in the search field
      // will need to add a way to enforce accepted input types
      var isbn = $scope.bookToSearch;
      console.log('in getBooks', isbn);
      ApiService.getBooks(isbn);
  };

  // connect controller data to factory data here
  $scope.bookToSearch = ApiService.bookToSearch;

}]);
