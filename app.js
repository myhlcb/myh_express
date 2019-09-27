const createError = require ('http-errors');
const express = require ('express');
require ('express-async-errors');
const path = require ('path');
const cookieParser = require ('cookie-parser');
const logger = require ('morgan');
const router = require ('./app/router');

const app = express ();
const session = require ('express-session');

const redis = require ('ioredis');

const RedisStore = require ('connect-redis') (session);
const client = redis.createClient ();
const swaggerUi = require ('swagger-ui-express');
const swaggerDocument = require ('./swagger.json');

app.use ('/swagger', swaggerUi.serve, swaggerUi.setup (swaggerDocument));
app.use (
  session ({
    name: 'myh',
    secret: 'myh_express_test',
    store: new RedisStore ({client}),
    saveUninitialized: false,
    resave: false,

    cookie: {
      secure: false, //default false
      maxAge: 24 * 3600 * 1000,
    },
  })
);

// view engine setup
app.set ('views', path.join (__dirname, 'views'));
app.set ('view engine', 'jade');

app.use (logger ('dev'));
app.use (express.json ());
app.use (express.urlencoded ({extended: false}));
app.use (cookieParser ());
app.use (express.static (path.join (__dirname, 'public')));

app.use ('/v1', router);
//跨域访问
app.all ('*', function (req, res, next) {
  res.header ('Access-Control-Allow-Origin', '*');
  res.header ('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header ('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header ('X-Powered-By', ' 3.2.1');
  res.header ('Content-Type', 'application/json;charset=utf-8');
  next ();
});
// catch 404 and forward to error handler
app.use (function (req, res, next) {
  next (createError (404));
});

// error handler
app.use (function (err, req, res, next) {
  // render the error page
  console.log (err.stack, 11111);
  res.status (err.status || 500);
  res.send (err.stack);
});
app.listen (3007, () => {
  console.log ('3007 gooooooooooooooooooo');
});
module.exports = app;
