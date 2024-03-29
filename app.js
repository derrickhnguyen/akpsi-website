var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config');
var mongoose = require('mongoose');
var imagemin = require('imagemin');
var imageminMozjpeg = require('imagemin-mozjpeg');

imagemin(['public/images/banners/*.jpg'], 'public/images/banners/min/', {
  plugins: [imageminMozjpeg()]
}).then(function(files) {
  console.log("Banner compressions successful!");
});

imagemin(['public/images/headshots/new/*.JPG'], 'public/images/headshots/min/', {
  plugins: [imageminMozjpeg()]
}).then(function(files) {
  console.log("Headshot compression successful!");
});

imagemin(['public/images/*.jpg'], 'public/images/min/', {
  plugins: [imageminMozjpeg()]
}).then(function(files) {
  console.log("Misc. image compressions successful!");
});

var routes = require('./routes/index');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/assets/', express.static(__dirname + '/public'));

mongoose.connect(config.getDbConnectionString());
app.use('/', routes);
app.locals.pretty = true;

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
