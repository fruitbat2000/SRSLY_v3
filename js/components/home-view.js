define([
	"templates/templates",
	"components/models",
	"libs/handlebars",
	"libs/backbone"
], 

function(templates, models, Handlebars, Backbone) {
	var data = models.models;
	
	var HomeView = Backbone.View.extend({
		el: '#content',
		tmpl: hbs.home,
		render: function() {
			this.$el.html(this.tmpl(data))
			return this;
		}
	});

	return HomeView;
});