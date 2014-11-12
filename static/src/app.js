'use strict';

var React = require('react');
var ItemList = require('./item-list');

React.render(
  <ItemList url="/api/items" />,
  document.getElementById('items-container')
);
