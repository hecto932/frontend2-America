Puls3.Routers.Base = Backbone.Router.extend({
	routes : {
		'' : 'root',
		'article/:id' : 'articleSingle'
	},
	initialize : function(){

	},
	root : function (){
		console.log('Estamos en el root de nuestra aplicación');
		window.app.state = 'root';
		window.app.article = null;
	},
	articleSingle : function(id){
		console.log('Estamos en articleSingle');

		window.app.state = 'articleSingle';
		window.app.article = id;
	}
});