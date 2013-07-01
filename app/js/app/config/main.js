
require.config({
  baseUrl: "./js",
  urlArgs: 'v300613-008',
  paths: {
    "app" : "app",


    "jquery" : "lib/jquery-1.10.1.min",
    "backbone" : "lib/backbone",
    "backbone.wreqr" : "lib/backbone.wreqr.min",
    "backbone.babysitter" : "lib/backbone.babysitter.min",
    "marionette": "lib/backbone.marionette.min",
    "text": "lib/text",

    "underscore": "lib/underscore-min",
    "handlebars": "lib/handlebars",


    "models": "app/models",
    "modules": "app/modules",
    "controllers": "app/controllers",
    "views": "app/views",
    "routers": "app/routers",
    "templates": "app/templates"

  },
  shim: {
    jquery : {
      exports : 'jQuery'
    },
    underscore : {
      exports : '_'
    },
    handlebars : {
      exports : 'Handlebars'
    },
    backbone : {
      deps : ['jquery', 'underscore'],
      exports : 'Backbone'
    },
    marionette : {
      deps : ['jquery', 'underscore', 'backbone'],
      exports : 'Marionette'
    }
  }
});

define(['app/App'], function(){
  CityBotApp.start();
});