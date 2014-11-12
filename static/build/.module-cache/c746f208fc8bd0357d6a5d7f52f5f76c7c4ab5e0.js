'use strict';

var React = require('react');
var Item = require('./item');

module.exports = React.createClass({displayName: 'exports',
  getInitialState: function() {
    return { items: [1, 2, 3] };
  },
  render: function() {
    var itemNodes = this.state.items.map(function(item) {
      return (
        React.createElement(Item, {value: item }, 
          item 
        )
      );
    });
    return (
      React.createElement("ul", {className: "item-list"}, 
        itemNodes 
      )
    );
  }
});
