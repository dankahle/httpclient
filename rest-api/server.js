var express = require('express'),
  bodyParser = require('body-parser'),
  userRouter = require('./user/userRouter'),
  cors = require('cors'),
  base = require('node-base'),
  errorHandler = base.middleware.errorHandler,
  notFound = base.middleware.notFound;

var app = express(),
  port = 3005;

app.use(function tap(req, res, next) {
  console.log(req.method, req.url);
  next();
})
app.use(cors());
app.use(bodyParser.json());


app.use('/api/users', userRouter);

app.use(function (req, res) {
  res.status(404).send('Oops, file not found')
})

app.use(notFound())
app.use(errorHandler());

/*
app.use(function(err, req, res, next) {
  res.status(err.status || 500).send(err);
});
*/

app.listen(port, function () {
  console.log(`listening on ${port}`);
});
