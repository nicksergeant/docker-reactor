'use strict';

var jQuery = require('jquery');
var React = require('react');
var ItemList = require('./item-list');

React.createClass({
  render: function() {
    console.log('hi');
    return (
      React.createElement(ItemList, null),
      document.getElementById('items-container')
    );
  }
});
