'use strict';

var React = require('react');

module.exports = React.createClass({displayName: 'exports',
  render: function() {
    return (
      React.createElement("li", {key:  this.props.item.key, className: "item"}, 
         this.props.item.value
      )
    );
  }
});
