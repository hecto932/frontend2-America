Puls3.Views.Article = Backbone.View.extend({
	tagName 	: "article",
	className 	: "post",
	initialize 	: function()
	{
		this.template = _.template( $('#article-template').html() );
		//this.template = swig.compile( $('#article-template').html() );
	},
	render		: function (){
		var data = this.model.toJSON();

		//Jutar DATA con el Template
		var html = this.template(data);

		this.$el.html(html);
	}
});