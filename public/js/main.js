$(document).ready(function(){
	console.log('main.js loaded');

	window.views.app = new Puls3.Views.App ( $('body') );
	window.routers.base = new Puls3.Routers.Base();
	window.ponyExpress = new PonyExpress({
		io : window.location.origin
	});

	window.ponyExpress.bind('connect',function(){
		window.plugs.article = new PonyExpress.BackbonePlug({
			collection : window.collections.articles
		});
	});

	window.collections.articles = new Puls3.Collections.Articles();
	window.collections.articles.on('add', function(model) {
		//Agregando nuevas vistas de articulos
		var view = new Puls3.Views.Article({ model: model });
		view.render();
		$('.posts').prepend(view.$el);
	});

	//Voy al server a pedir los articulos creados
	//Estoy hace un AjaxRequest a /articules/ al server
	var xhr = window.collections.articles.fetch();

	xhr.done(function(){
		Backbone.history.start({
			root : '/',
			pushState : true
		});
	});	


});
