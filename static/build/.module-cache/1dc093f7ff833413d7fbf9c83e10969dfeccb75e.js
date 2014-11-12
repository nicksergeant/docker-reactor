'use strict';

var React = require('react');

alert('hi');

module.exports = React.createClass({displayName: 'exports',
  render: function() {
    return (
      React.createElement("h1", null, "Hello, world!")
    );
  }
});
