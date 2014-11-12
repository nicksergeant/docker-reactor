'use strict';

var React = require('react');
var Item = require('./item');

module.exports = React.createClass({displayName: 'exports',
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        React.createElement(Comment, {author: comment.author}, 
        comment.text
        )
        );
    });
    return (
      React.createElement("div", {className: "commentList"}, 
      commentNodes
      )
      );
  }
});
