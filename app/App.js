define( [ 'jquery', 'underscore','backbone', 'marionette', 'handelbars',
  'text!templates/index.html' ],
function( $, _, Backbone, Marionette, handelbars, indexTpl ) {


  var MainRouter = Backbone.Marionette.AppRouter.extend({
    appRoutes: {
      '' : 'index',
    }
  });


  var App = new Backbone.Marionette.Application();

  App.addRegions({
    'main' : '#zero'
  })

  App.addInitializer(function(){
    console.log('init');

    new MainRouter({
      controller: {
        index: function(){
        }
      }
    });

    if(Backbone.history.start({
      //pushState: true,
      root: '/app/',
      silent: true
    })){ console.log('resolved'); }
      else{ console.log('route not found');}
  })

  return App;
})