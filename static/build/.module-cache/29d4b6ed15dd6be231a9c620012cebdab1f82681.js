'use strict';

var React = require('react');
var Item = require('./item');

module.exports = React.createClass({displayName: 'exports',
  render: function() {
    var itemNodes = this.props.data.map(function(item) {
      return (
        React.createElement(Item, {value: item }, 
           item.text
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
