Puls3.Views.App = Backbone.View.extend({
	events : {
		"click .publicar" : "showForm",
		"submit form" : "createArticle",
		'click .logo' : 'navigateHome'
	},
	initialize : function($el){
		this.$el = $el;
	},
	navigateHome : function(){
		Backbone.history.navigate('/', { trigger : true });
	},
	showForm : function(e){
		e.preventDefault();
		this.$el.find('form').slideToggle();
	},
	createArticle : function(e){
		e.preventDefault();

		var titulo 	= $('input[name=titulo]').val();
		var autor  	= $('input[name=autor]').val();
		var tag    	= $('input[name=tag]').val();

		var data = {
			"title" : titulo,
			"image" : "/img/img3.jpg",
			"user"  : autor,
			"tag"   : tag,
			"votes" : 0,
		};

		console.log(data.user);
		
		var model = new Puls3.Models.Article(data);

		model.save();

		this.$el.find('form input[type=text]').val();
		this.$el.find('form').slideToggle();
	}
});