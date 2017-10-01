myApp.factory('ApiService', ['$http', function($http){
  console.log('Api Service Loaded');

    var bookInfoFromApi = {};

    return {
        bookInfoFromApi : bookInfoFromApi,
        getBooks : function(book){
          $http.get("/googleBooksApi/" + book).then(function(response){
            infoFromApi.response = response.data;
            $location.path("/bookResults");
            console.log("book results", response);
          }); //end $http.get
        },//end getSpoonacular
    };

}]);
