myApp.factory('ApiService', ['$http', function($http){
  console.log('Api Service Loaded');

$scope.searchForBook = function(){
  // console.log("Find Recipes button clicked", $scope.selectedIng);
  var input = $scope.selectedIng;
  ApiService.getRecipes(input);
}; // end ingredients.submit

}]);
