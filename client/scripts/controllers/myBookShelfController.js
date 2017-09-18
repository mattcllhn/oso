myApp.controller('MyBookShelfController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('MyBookShelfController loaded');
  $scope.logout = UserService.logout;

  $scope.searchForBook = function(input) {
      console.log("searching for book " + input);
      var book = input.name;
  };

  // connect controller data to factory data here

}]); // end myApp.controller
