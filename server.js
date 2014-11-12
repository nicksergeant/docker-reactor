'use strict';

var compress = require('compression');
var ejs = require('ejs');
var express = require('express');

var app = express();

app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');

app.use(compress());
app.use('/static', express.static(__dirname + '/static'));

app.get('/api/items', function (req, res) {
  res.json([

  ]);
});
app.get('/', function (req, res) {
  res.render('base.html', {});
});

app.listen(8888);
