define([
	"templates/templates",
	"components/models",
	"libs/handlebars",
	"libs/backbone"
], 

function(templates, folioCollection, Handlebars, Backbone) {

	var DetailView = Backbone.View.extend({
		id: 'detailView',
		el: '#main',
		tmpl: hbs.detail,
		collection: folioCollection,

		render: function(id) {
			this.$el.html(this.tmpl(this.collection.byId(id)));
			return this;
		}
	});

	return DetailView;
});