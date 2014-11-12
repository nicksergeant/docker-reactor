'use strict';

var React = require('react');
var Item = require('./item');

module.exports = React.createClass({displayName: 'exports',
  getInitialState: function() {
    return { items: [] };
  },
  render: function() {
    var itemNodes = this.state.items.map(function(item) {
      return (
        React.createElement(Item, {value: item })
      );
    });
    return (
      React.createElement("ul", {className: "item-list"}, 
        itemNodes 
      )
    );
  }
});
