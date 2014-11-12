'use strict';

var jQuery = require('jquery');
var React = require('react');
var ItemList = require('./item-list');

var ItemsContainer = React.createClass({displayName: 'ItemsContainer',
  getInitialState: function() {
    return {
      items: [1, 2, 3]
    };
  },
  render: function() {
    console.log('here');
    return (
      React.createElement(ItemList, {items:  this.state.items}),
      document.getElementById('items-container')
    );
  }
});
