'use strict';

var jQuery = require('jquery');
var React = require('react');
var Item = require('./item');

module.exports = React.createClass({displayName: 'exports',
  getInitialState: function() {
    return { items: [] };
  },
  componentDidMount: function() {
    jQuery.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({ items: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    var itemNodes = this.state.items.map(function(item) {
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
