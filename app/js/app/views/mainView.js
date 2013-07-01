define(['backbone', 'marionette', 'handlebars', 'text!templates/index.html'],
  function(Backbone, Marionette, Handlebars, indexTpl){
    return Backbone.Marionette.ItemView.extend({
      template: Handlebars.compile(indexTpl),
      onRender: function(){
      }
    });
  });