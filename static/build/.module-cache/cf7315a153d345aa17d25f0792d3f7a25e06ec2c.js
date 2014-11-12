'use strict';

var jQuery = require('jquery');
var React = require('react');
var ItemList = require('./item-list');

React.render(
  React.createElement(ItemList, {url: "/api/items"}),
  document.getElementById('items-container')
);
