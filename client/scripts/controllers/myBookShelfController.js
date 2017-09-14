myApp.controller('MyBookShelfController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('My Book Shelf Controller loaded');
  $scope.logout = UserService.logout;

  // connect controller data to factory data here

}]); // end myApp.controller
