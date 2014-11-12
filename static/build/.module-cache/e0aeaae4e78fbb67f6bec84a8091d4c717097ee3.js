'use strict';

var React = require('react');
var Item = require('./item');

console.log('here');

module.exports = React.createClass({displayName: 'exports',
  render: function() {
    console.log('hi');
    console.log(this.props.data);
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
