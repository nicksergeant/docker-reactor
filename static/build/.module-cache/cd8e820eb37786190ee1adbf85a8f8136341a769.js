'use strict';

var React = require('react');

module.exports = React.createClass({displayName: 'exports',
  render: function() {
    return (
      React.createElement("li", {className: "item"}, 
         this.state
      )
    );
  }
});
