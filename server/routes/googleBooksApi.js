var express = require('express');
var router = express.Router();
var path = require('path');
var https = require('https');

router.get('/:isbn', function(req, res){
  var isbn = req.params.isbn;
  console.log('in /isbn in googleBooksApi.js', isbn);
      https.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn)
    //   https.get('https://www.googleapis.com/books/v1/volumes?q=' + isbn)
        .end(function (result) {
        console.log(result.status, result.headers, result.body);
        res.send(result.body);
  }); // end http.get
});

module.exports = router;
