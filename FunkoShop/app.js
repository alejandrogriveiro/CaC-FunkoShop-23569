var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const hbs = require('hbs');
const path = require('path');

var indexRouter = require('./src/routes/index');
var shopRouter = require('./src/routes/shop');
var adminRouter = require('./src/routes/admin');
var contactRouter = require('./src/routes/contact');
var loginRouter = require('./src/routes/login');
var cartRouter = require('./src/routes/cart');
var registerRouter = require('./src/routes/register');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

hbs.registerPartials(
  path.join(__dirname, 'src', 'views', 'partials'),
  function (err) {
    if (err) {
      console.log('Error de parciales: ', err);
    }
  }
);

app.use('/', indexRouter);
app.use('/shop', shopRouter);
app.use('/admin', adminRouter);
app.use('/contact', contactRouter);
app.use('/login', loginRouter);
app.use('/cart', cartRouter);
app.use('/register', registerRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
