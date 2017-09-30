var express = require("express");
var router = express.Router();
var path = require("path");

// API call to get images and id for recipes
router.get("/:books", function(req, res){
  var books = req.params.books;
  // $http.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients"+
  //           "?fillIngredients=false&ingredients=" + ingredients + "&limitLicense=true&number=8&ranking=1")
  // .header("X-Mashape-Key", "5odaehKxNbmshul9AvfFy6EBdgBXp1Dcw1rjsnR8zfBgCuY9mH")
  // .header("Accept", "application/json")
  $http.get("www.googleapis.com/books/v1/volumes?q=isbn:$isbn")
  .end(function (result) {
  res.send(result.body);
  }); // end unirest.get
});

module.exports = router;
