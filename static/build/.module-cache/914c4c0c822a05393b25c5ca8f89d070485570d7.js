'use strict';

var jQuery = require('jquery');
var React = require('react');
var ItemList = require('./item-list');

React.createClass({
  getInitialState: function() {
    return {
      items: [1, 2, 3]
    };
  },
  render: function() {
    console.log('rendering');
    return (
      React.createElement(ItemList, {items:  this.state.items}),
      document.getElementById('items-container')
    );
  }
});
