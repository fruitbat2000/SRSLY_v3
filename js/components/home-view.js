define([
	"templates/home",
	"components/models",
	"libs/handlebars",
	"libs/backbone"
], 

function(home, models, Handlebars, Backbone) {

	var HomeView = Backbone.View.extend({
		el: '#content',
		tmpl: Handlebars.templates['home.html'],
		render: function() {
			this.$el.html(this.tmpl(models))
			return this;
		}
	});

	var homeView = new HomeView();	
	homeView.render()

});