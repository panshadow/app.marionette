define(['backbone', 'marionette', 'handlebars', 'text!templates/opt.html'],
  function(Backbone, Marionette, Handlebars, optTpl){
    console.log(optTpl);
    return Backbone.Marionette.ItemView.extend({
      template: Handlebars.compile(optTpl)
    });
  });