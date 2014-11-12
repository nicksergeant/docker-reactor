'use strict';

var jQuery = require('jquery');
var React = require('react');
var Item = require('./item');

module.exports = React.createClass({displayName: 'exports',
  getInitialState: function() {
    return { items: [] };
  },
  componentDidMount: function() {
    jQuery.getJSON(this.props.url, function(data) {
      this.setState({ items: data });
    }.bind(this));
  },
  render: function() {
    var itemNodes = this.state.items.map(function(item) {
      console.log(item);
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
