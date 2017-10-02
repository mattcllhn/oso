var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/:isbn', function(req, res){
  console.log('in /isbn in googleBooksApi.js');
  var isbn = req.params.isbn;
      $http.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn)
        .end(function (result) {
          console.log('In googleBooksApi.js and the result is ', result);
        res.send(result.body);
  }); // end $http.get
});

module.exports = router;
