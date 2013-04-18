define([
	"templates/templates",
	"components/models",
	"libs/handlebars",
	"libs/backbone"
], 

function(templates, models, Handlebars, Backbone) {
	var data = models.models;
	
	var AboutView = Backbone.View.extend({
		el: '#main',
		tmpl: hbs.about,
		render: function() {
			this.$el.html(this.tmpl(data))
			return this;
		}
	});

	return AboutView;
});