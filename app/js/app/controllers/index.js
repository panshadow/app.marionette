define(['backbone','marionette'],
function(Backbone, Marionette){
  return Backbone.Marionette.Controller.extend({
    initialize: function(){

    },
    index: function(){
      require(['views/mainView'],function(View){
        CityBotApp.main.show( new View() );
      });
    },
    opt: function(){
      require(['views/optView'], function(View){
        CityBotApp.main.show( new View() );
      })
    }
  })
});