var express = require('express');
var router = express.Router();
var path = require('path');
var https = require('https');

router.get('/:isbn', function(req, res){
  var isbn = req.params.isbn;
  console.log('in /:isbn in googleBooksApi.js', isbn);
    //   https.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn)
      https.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' +
                 isbn + '&key=AIzaSyAFGKTlgzg7-XzMg6Yzo8dx9vrLPiIeyh4')
      // API Key: AIzaSyAFGKTlgzg7-XzMg6Yzo8dx9vrLPiIeyh4
        .end(function (result) {
        console.log(result);
        console.log(result.items[0]);
        res.send(result.items[0]);
  }); // end http.get
});

module.exports = router;













///////////////////////////////////////////////////////////////////////////////
// Other Stuff I was trying

// router.get('/:isbn', function(req, res){
//   var isbn = req.params.isbn;
//   console.log('in /isbn in googleBooksApi.js', isbn);
//       https.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn)
//     //   https.get('https://www.googleapis.com/books/v1/volumes?q=' + isbn)
//         .end(function (result) {
//             var results = JSON.parse(result);
//             if (results.totalItems) {
//
//               // There'll be only 1 book per ISBN
//               var book = results.items[0];
//
//               var title = book.volumeInfo.title;
//               var subtitle = book.volumeInfo.subtitle;
//               var authors = book.volumeInfo.authors;
//               var printType = book.volumeInfo.printType;
//               var pageCount = book.volumeInfo.pageCount;
//               var publisher = book.volumeInfo.publisher;
//               var publishedDate = book.volumeInfo.publishedDate;
//               var webReaderLink = book.accessInfo.webReaderLink;

            //   var title = (book["volumeInfo"]["title"]);
            //   var subtitle = (book["volumeInfo"]["subtitle"]);
            //   var authors = (book["volumeInfo"]["authors"]);
            //   var printType = (book["volumeInfo"]["printType"]);
            //   var pageCount = (book["volumeInfo"]["pageCount"]);
            //   var publisher = (book["volumeInfo"]["publisher"]);
            //   var publishedDate = (book["volumeInfo"]["publishedDate"]);
            //   var webReaderLink = (book["accessInfo"]["webReaderLink"]);

              // For debugging
//               console.log(book);
//
//             }
//   }); // end http.get
// });
//
// module.exports = router;
