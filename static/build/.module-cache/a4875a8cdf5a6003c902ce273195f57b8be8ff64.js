'use strict';

var React = require('react');
var Item = require('./item');

React.render(
  React.createElement(ItemList, null),
  document.getElementById('items-container')
);
