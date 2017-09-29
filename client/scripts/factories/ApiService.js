myApp.factory('ApiService', ['$http', function($http){
  console.log('Api Service Loaded');

    var bookInfoFromApi = {};

    return {
        bookInfoFromApi : bookInfoFromApi,
        getBooks : function(book){
          $http.get("/api/" + ingredients).then(function(response){
            infoFromApi.response = response.data;
            $location.path("/recipeResults");
            console.log("relevant recipes", response);
          }); //end $http.get
        },//end getSpoonacular
    };

}]);
