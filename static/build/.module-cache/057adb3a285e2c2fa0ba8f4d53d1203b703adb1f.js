'use strict';

var React = require('react');
var Item = require('./item');

module.exports = React.createClass({displayName: 'exports',
  render: function() {
    return (
      React.createElement("ul", {className: "item-list"}, 
        React.createElement(Item, null)
      )
    );
  }
});
