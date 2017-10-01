var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/:books", function(req, res){
  var books = req.params.books;
      $http.get("www.googleapis.com/books/v1/volumes?q=isbn:$isbn")
      .end(function (result) {
      res.send(result.body);
  }); // end unirest.get
});

module.exports = router;
