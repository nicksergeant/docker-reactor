'use strict';

var React = require('react');
var Item = require('item');

React.renderComponent(
  React.createElement(Item, null),
  document.getElementById('example')
);
