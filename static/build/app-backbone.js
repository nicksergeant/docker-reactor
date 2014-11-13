'use strict';

var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;

_.templateSettings = {
  interpolate: /\{\{=(.+?)\}\}/g,
  evaluate: /\{\{(.+?)\}\}/g,
};

var Item = Backbone.Model.extend();

var ItemsCollection = Backbone.Collection.extend({
  model: Item,
  url: '/api/items'
});

var ItemsView = Backbone.View.extend({

  el: $('#items-container'),

  initialize: function() {

    this.template = _.template($('#items-container').html());

    this.listenTo(this.collection, 'reset add change remove',
                  this.render, this);

    this.collection.fetch();

  },
  render: function() {
    $(this.el).html(this.template({
      items: this.collection.models
    }));
  }
});

var itemsView = new ItemsView({
  collection: new ItemsCollection()
});
