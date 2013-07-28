define([
	"templates/templates",
	"components/models",
	"libs/handlebars",
	"libs/backbone"
], 

function(templates, folioCollection, Handlebars, Backbone) {

	var ListView = Backbone.View.extend({

		el: '#main',		
		collection: folioCollection,

		initialize: function() {
			if(window.location.hash === '#work') {
				this.tmpl = hbs.work;
			} else {
				this.tmpl = hbs.labs;
			}
		},

		render: function() {
			this.$el.html(this.tmpl(this.collection));
			this.initEvents();
			return this;
		},

		initEvents: function() {
			var self = this;
			//render detail view when clicking folio item
			this.$el.on('click', 'li', function(e) {
				var id = $(this).data('id');
				self.trigger('detailView', id);
				$('html, body').animate({scrollTop:0}, 400);
			});
		}
	});

	return ListView;
});