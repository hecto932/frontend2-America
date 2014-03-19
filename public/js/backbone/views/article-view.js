Puls3.Views.Article = Backbone.View.extend({
	events	: {
		'click .acciones .votos .up' 	: 'upvote',
		'click .acciones .votos .down' 	: 'downvote',
		'click' : 'navigate',
		'click .descripcion .detalles .tag' : 'hola'
 	},
	tagName : "article",
	className : "post",
	initialize : function()
	{
		var self = this;
		this.model.on('change', function(){
			if(window.app.state === 'articleSingle'){
				self.extendedRender();
			}else{
				self.render();
			}
		});

		window.routers.base.on('route:root', function(){
			self.$el.css('display','');
			self.render();
		});

		window.routers.base.on('route:articleSingle', function(){
			if(window.app.article == self.model.get('id')){
				//Muestra version extendida
				self.extendedRender();
			}else{
				self.$el.hide();
			}
		});

		//this.template = _.template( $('#article-template').html() );
		this.template = swig.compile( $('#article-template').html() );
		this.extendedTemplate = swig.compile( $('#article-extended-template').html() );
		//this.template = swig.compile( $('#article-template').html() );
	},
	navigate : function (){
		Backbone.history.navigate('/article/' + this.model.get('id'), { trigger : true });
	},
	hola : function()
	{
		var tag = this.model.get('tag');
		alert('Click a '+tag);
	},
	downvote : function(e){
		e.preventDefault();
		e.stopPropagation();
		console.log(this.model.get('votes'));
		var votes = parseInt(this.model.get('votes'), 10);
		this.model.set('votes',--votes);
		this.model.save(); // El cambio va al server
	},
	upvote : function (e){
		e.preventDefault();
		e.stopPropagation();
		var votes = parseInt(this.model.get('votes'), 10);
		this.model.set('votes',++votes);
		this.model.save(); // El cambio va al server
	},
	extendedRender : function () {
		var data = this.model.toJSON();

		var html = this.extendedTemplate(data);

		this.$el.html(html);
	},
	render		: function (){
		var data = this.model.toJSON();

		//Jutar DATA con el Template
		var html = this.template(data);

		this.$el.html(html);
	}
});