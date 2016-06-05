var express = require('express');
var app = express();
var path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// statis: js,img,css
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use(express.static(path.join(__dirname, '/public')));

// routes
var routes = require('./routes/index');
app.get('/', routes);

module.exports = app;
