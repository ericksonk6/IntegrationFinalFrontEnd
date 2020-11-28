var express = require('express');
var router = express.Router();

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
        '               <title>Book Search</title> \n' +
        '               <!-- Bootstrap core CSS --> \n' +
        '               <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" ' +
        '               integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" ' +
        'crossorigin="anonymous"> \n' +
        '       </head> \n' +
        '        <body> \n' +
        '               <div class="container" style="text-align: center"> \n' +
        '               <h1>Home</h1><br> \n'
    );
    response.write(
        '<nav class="navbar navbar-expand-lg navbar-light bg-light">\n' +
        '        <a class="navbar-brand active" href="index.html">Home</a>\n' +
        '        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">\n' +
        '            <span class="navbar-toggler-icon"></span>\n' +
        '        </button>\n' +
        '        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">\n' +
        '            <div class="navbar-nav">\n' +
        '                <a class="nav-item nav-link active" href= >Add Books</a>\n' +
        '                <a class="nav-item nav-link active" href="../public/site/add.html"">Show Books</a>\n' +
        '                <a class="nav-item nav-link active" href="find.html">Find Book</a>\n' +
        '                <a class="nav-item nav-link active" href="remove.html">Remove Book</a>\n' +
        '                <a class="nav-item nav-link active" href="update.html">Update Book</a>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </nav>'+
        'hey'
    );
    response.write(
        '<div class="container">\n' +
        '    <p style="color: blue">Enter ISBN of the book you would like to find</p>\n' +
        '    <form>\n' +
        '\n' +
        '        <!-- SEARCH USING ISBN FORM -->\n' +
        '\n' +
        '        <div class="form-group">\n' +
        '            <label for="isbn1">ISBN</label>\n' +
        '\n' +
        '            <!-- user enters isbn number -->\n' +
        '            <input type="text" class="form-control" id="isbn1">\n' +
        '        </div>\n' +
        '\n' +
        '        <!-- user presses send button -->\n' +
        '        <button type="submit" class="btn btn-primary" id="get">Search</button>\n' +
        '    </form>\n' +
        '</div>'
    );



    response.write(
        '               <div class="jumbotron" id="output"> </div>\n'
    );
    response.write(
        '       </body> \n' +
        '</html> \n'
    );
    response.end();
});
module.exports = router;