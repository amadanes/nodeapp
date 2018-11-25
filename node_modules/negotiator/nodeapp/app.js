//Module Dependencies
var express = require('express');
var stylus = require('stylus');
var nib = require('nib');

//Set Port Number
var portnumber = 3000;

//Initiate Express
var app = express();
console.log('Express framework initiated');

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

//Set Views Folder
app.set('views', __dirname + '/views');
//Initiate Jade
app.set('view engine', 'jade');
console.log('Jade view engine initiated');

//Stylus Middleware
app.use(express.logger('dev'));
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'));

//Render Index Page
app.get('/', function (req, res) {
  res.render('index',
  { title : 'Welcome' }
  )
})

app.listen(portnumber);
console.log('Server is now running on port '+portnumber);
