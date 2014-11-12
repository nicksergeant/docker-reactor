'use strict';

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <li className="item">
        { this.props.item.value }
      </li>
    );
  }
});
