'use strict';

var jQuery = require('jquery');
var React = require('react');
var ItemList = require('./item-list');

var ItemsContainer = React.createClass({displayName: 'ItemsContainer',
  render: function() {
    return (
      React.createElement(ItemList, {items:  this.state.data}),
      document.getElementById('items-container')
    );
  }
});
