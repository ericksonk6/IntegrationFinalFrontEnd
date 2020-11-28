let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(request, response, next) {
  // Add to PUG on a later version?
  //  res.render('index', { title: 'Express' });
  response.write(
      '<!DOCTYPE html> \n' +
      '<html lang="en"> \n' +
      '        <head> \n' +
      '               <meta charset="utf-8"> \n' +
      '               <meta http-equiv="X-UA-Compatible" content="IE=edge"> \n' +
      '               <meta name="viewport" content="width=device-width, initial-scale=1"> \n' +
      '               <meta name="description" content="Home Page"> \n' +
      '               <meta name="author" content="Carlos Arias"> \n' +
      '               <script type="text/javascript" src="/javascripts/books.js"></script>' +
      ' \n' +
      '               <title>Book Database</title> \n' +
      '               <!-- Bootstrap core CSS --> \n' +
      '               <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"> \n' +
      '       </head> \n' +
      '        <body> \n' +
      '               <div class="container" style="text-align: center"> \n'
  );
  response.write(
      '<div class="container">\n' +
      '    <h1>Books</h1>\n' +
      '\n' +
      '    <nav class="navbar navbar-expand-lg navbar-light bg-light">\n' +
      '            <a class="navbar-brand active" href="/">Home</a>\n' +
      '        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">\n' +
      '            <span class="navbar-toggler-icon"></span>\n' +
      '        </button>\n' +
      '        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">\n' +
      '            <div class="navbar-nav">\n' +
      '                <a class="nav-item nav-link active" href="../site/add.html">Add Book </a>\n' +
      '                <a class="nav-item nav-link active" href="../site/show.html">Show Books</a>\n' +
      '                <a class="nav-item nav-link active" href="../site/find.html">Find Book</a>\n' +
      '                <a class="nav-item nav-link active" href="../site/remove.html">Remove Book</a>\n' +
      '                <a class="nav-item nav-link active" href="../site/update.html">Update Book</a>\n' +
      '      \'        <a class="nav-item nav-link active" href="./scratch.js"> scratch</a>\\n\' +\n            ' +
      '</div>\n' +
      '        </div>\n' +
      '    </nav>\n' +
      '\n' +
      '</div>\n'
  );
  response.end();
});

module.exports = router;