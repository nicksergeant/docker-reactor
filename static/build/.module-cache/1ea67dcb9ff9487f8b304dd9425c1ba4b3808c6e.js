'use strict';

var React = require('react');
var Item = require('./item');

alert('hi');

React.render(
  React.createElement(Item, null),
  document.getElementById('example')
);
