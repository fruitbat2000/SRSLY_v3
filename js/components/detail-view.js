define([
	"templates/templates",
	"components/models",
	"libs/handlebars",
	"libs/backbone"
], 

function(templates, folioCollection, Handlebars, Backbone) {

	var DetailView = Backbone.View.extend({
		el: '#content',
		tmpl: hbs.detail,
		collection: folioCollection,

		render: function(id) {
			this.$el.html(this.tmpl(this.collection.byId(id)));
			this.$el.append(hbs.projectThumbs(folioCollection));
			this.initElements(id);
			this.sortCarousel(id);
			this.initEvents();
			return this;
		},

		initElements: function(id) {
			this.$scrollable = this.$el.find('.slider');
			this.$scrollLeft = this.$el.find('.scroll-right');
			this.$scrollRight = this.$el.find('.scroll-left');
			this.$currentProject = this.$el.find('[data-id="'+id+'"]');
			this.$currentProjectImg = this.$el.find('[data-id="'+id+'"] img');
			this.$projectList = this.$el.find('ul.list');
		},
		
		initEvents: function() {
			var self = this;
			//trigger detail view event in order to update url and render view with a new model
			this.$el.on('click', 'li', function(e) {
				e.preventDefault();
				var id = $(this).data('id');
				self.trigger('detail view', id);
				return false;
			});
			//carousel scroll functions
			this.$scrollLeft.click(function(e) {
				e.preventDefault();
				self.$scrollable.animate({
					scrollLeft: self.$scrollable[0].scrollLeft+220
				}, 200, function(){return false});
			});
			this.$scrollRight.click(function(e) {
				e.preventDefault();
				self.$scrollable.animate({
					scrollLeft: self.$scrollable[0].scrollLeft-220
				}, 200, function(){return false});
			});
		},

		sortCarousel: function(id) {
			//this.$currentProject.prependTo(this.$projectList);
			this.$currentProjectImg.fadeTo(0,1);
		}
	});

	return DetailView;
});