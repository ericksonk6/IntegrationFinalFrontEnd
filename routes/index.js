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
      ' <link rel = "stylesheet"\n' +
      '          type = "text/css"\n' +
      '          href = "../stylesheets/style.css"/>'+
      ' \n' +
      '               <title>Book Database</title> \n' +
      '<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>\n'+
      '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">\n' +
      '    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>\n' +
      '    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>'+
      '               <!-- Bootstrap core CSS --> \n' +
      '       </head> \n' +
      '        <body> \n' +
      '               <div class="container" style="text-align: center"> \n'
  );
  response.write(
      '<h1>Kates Book Database</h1>\n' +
      '<nav class="navbar navbar-expand-lg navbar-light">\n' +
      '    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n' +
      '        <span class="navbar-toggler-icon"></span>\n' +
      '    </button>\n' +
      '\n' +
      '    <div class="collapse navbar-collapse" id="navbarSupportedContent">\n' +
      '        <ul class="navbar-nav mr-auto">\n' +
      '            <li class="nav-item">\n' +
      '               <a class="nav-item nav-link active" href="../site/add.html">Add Book </a>\n' +
      '            </li>\n' +
      '            <li class="nav-item">\n' +
      '               <a class="nav-item nav-link active" href="../site/show.html">Show Book </a>\n' +
      '            </li>\n' +
      '            <li class="nav-item">\n' +
      '               <a class="nav-item nav-link active" href="../site/find.html">Find Book </a>\n' +
      '            </li>\n' +
      '            <li class="nav-item">\n' +
      '               <a class="nav-item nav-link active" href="../site/remove.html">Remove Book </a>\n' +
      '            </li>\n' +
      '            <li class="nav-item">\n' +
      '               <a class="nav-item nav-link active" href="../site/update.html">Update Book </a>\n' +
      '            </li>\n' +
      '\n' +
      '        </ul>\n' +
      '    </div>\n' +
      '</nav>'
      // '<div class="container">\n' +
      // '    <h1>Book Database</h1>\n' +
      // '    <nav class="navbar navbar-expand-lg navbar-light bg-light">\n' +
      // '        <a class="navbar-brand active" href="/">Home</a>\n' +
      // '        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">\n' +
      // '            <div class="navbar-nav">\n' +
      // '               <a class="nav-item nav-link active" href="../site/add.html">Add Book </a>\n' +
      // '                <a class="nav-item nav-link active" href="../site/show.html">Show Books</a>\n' +
      // '                <a class="nav-item nav-link active" href="../site/find.html">Find Book</a>\n' +
      // '                <a class="nav-item nav-link active" href="../site/remove.html">Remove Book</a>\n' +
      // '                <a class="nav-item nav-link active" href="../site/update.html">Update Book</a>\n' +
      // '            </div>\n' +
      // '        </div>\n' +
      // '    </nav>\n' +
      // '</div>' +
      // '<div>' +
      // '<img src="../public/site/books.jpg">' +
      // '</div>'
  );

  response.write(
      '       </body> \n' +
      '</html> \n'
  );
  response.end();
});

module.exports = router;