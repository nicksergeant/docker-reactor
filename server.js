'use strict';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Testing Hub auto-build.');
});

app.listen(8888);
