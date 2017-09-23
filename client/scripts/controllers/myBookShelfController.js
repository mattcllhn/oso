myApp.controller('MyBookShelfController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('MyBookShelfController loaded');
  $scope.logout = UserService.logout;
  $scope.search = {};

  $scope.searchForBook = function(searchFromUser) {
      console.log("searching for  ", searchFromUser);
      var search = search.name;
  };

  // connect controller data to factory data here

}]); 
