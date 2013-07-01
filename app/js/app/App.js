define([
    'jquery', 'underscore',
    'backbone', 'marionette',
    'controllers/index', 'routers/mainRouter' ],
function( $, _, Backbone, Marionette, MainController, MainRouter ) {
  var App;
  if( !window.CityBotApp ){


    App = window.CityBotApp = new Backbone.Marionette.Application();

    App.addRegions({
      'main' : '#zero'
    });

    App.addInitializer(function(){

      new MainRouter({
        controller: new MainController()
      });

      var res = Backbone.history.start({
        root: '/app/'
      });
      if( !res ){
        alert('route not found');
      }

    });

    return App;
  }
  else{
    return window.CityBotApp;
  }

});