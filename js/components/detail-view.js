define([
	"templates/templates",
	"libs/handlebars",
	"libs/backbone"
], 

function(templates, Handlebars, Backbone) {

	var DetailView = Backbone.View.extend({
		id: 'detailView',
		el: '#main',
		tmpl: hbs.detail,

		render: function(id, collection) {
			this.$el.html(this.tmpl(collection.byId(id)));
			return this;
		}
	});

	return DetailView;
});