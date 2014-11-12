'use strict';

var compress = require('compression');
var ejs = require('ejs');
var express = require('express');
var fs = require('fs');
var uuid = require('node-uuid').v4;

var app = express();

app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');

app.use(compress());
app.use('/static', express.static(__dirname + '/static'));

app.get('/api/items', function(req, res) {
  res.json([
    { id: uuid(), value: 'Item 1' },
    { id: uuid(), value: 'Item 2' },
    { id: uuid(), value: 'Item 3' },
    { id: uuid(), value: 'Item 4' },
    { id: uuid(), value: 'Item 5' }
  ]);
});
app.get('/', function(req, res) {

  var bundleModifiedTime = fs.statSync(__dirname + '/static/dist/bundle.min.js').mtime.getTime() / 1000;

  res.render('base.html', {
    bundleModifiedTime: bundleModifiedTime
  });

});

app.listen(8888);
