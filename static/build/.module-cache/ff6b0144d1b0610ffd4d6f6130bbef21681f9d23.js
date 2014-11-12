'use strict';

var jQuery = require('jquery');
var React = require('react');
var ItemList = require('./item-list');

var ItemsContainer = React.createClass({displayName: 'ItemsContainer',
  getInitialState: function() {
    return {
      items: [1, 2, 3]
    };
  },
  render: function() {
    return (
      React.createElement("div", null, "Hi"),
      document.getElementById('items-container')
    );
  }
});
