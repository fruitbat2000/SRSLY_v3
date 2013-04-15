define([
	"templates/templates",
	"components/models",
	"libs/handlebars",
	"libs/backbone"
], 

function(templates, folioCollection, Handlebars, Backbone) {

	var WorkView = Backbone.View.extend({

		el: '#content',
		tmpl: hbs.work,
		collection: folioCollection,

		render: function() {
			this.$el.html(this.tmpl(folioCollection));
			this.initEvents();
			return this;
		},

		initEvents: function() {
			var self = this;
			//render detail view when clicking folio item
			this.$el.on('click', 'li', function(e) {
				var id = $(this).data('id');
				self.trigger('detail view', id);
			});
		}
	});

	return WorkView;
});