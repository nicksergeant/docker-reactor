'use strict';

var React = require('react');
var ItemList = require('./item-list');

React.render(
  React.createElement(ItemList, null),
  document.getElementById('items-container')
);
