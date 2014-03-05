Puls3.Views.App = Backbone.View.extend({
	events : {
		"click .publicar" : "showForm",
		"submit form" : "createArticle"
	},
	initialize : function($el){
		this.$el = $el;
	},
	showForm : function(){
		this.$el.find('form').show();
	},
	createArticle : function(e){
		e.preventDefault();

		var titulo 	= $('input[name=titulo]').val();
		var autor  	= $('input[name=autor]').val();
		var tag    	= $('input[name=tag]').val();

		var data = {
			"title" : titulo,
			"image" : "/img/img4.jpg",
			"user"	: autor,
			"tag"	: tag,
			"votes"	: 0
		};

		console.log(data);

		var model = new Puls3.Models.Article(data);

		model.save();
	}
});