'use strict';

var React = require('react');

module.exports = React.createClass({displayName: 'exports',
  render: function() {
    return (
      React.createElement("div", {className: "item"}, 
        "Item"
      )
    );
  }
});
