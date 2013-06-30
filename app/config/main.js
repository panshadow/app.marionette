require.config({
  baseUrl: "../lib/js",
  paths: {
    "app" : "../../app",


    "jquery" : "jquery-1.10.1.min",
    "backbone" : "backbone",
    "backbone.wreqr" : "backbone.wreqr.min",
    "backbone.babysitter" : "backbone.babysitter.min",
    "marionette": "backbone.marionette.min",

    "underscore": "underscore-min",
    "handelbars": "handelbars"

  },
  shim: {
    jquery : {
      exports : 'jQuery'
    },
    underscore : {
      exports : '_'
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

define(['app/App'], function(citybot2){
  citybot2.start();
});