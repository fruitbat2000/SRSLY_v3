define([
	"templates/templates",
	"components/models",
	"libs/handlebars",
	"libs/backbone"
], 

function(templates, folioCollection, Handlebars, Backbone) {
	
	var ThumbsView = Backbone.View.extend({
		tagName: 'section',
		id: 'project-thumbs',
		collection: folioCollection,

		events: {
			'click .list img' : 'triggerRoute'
		},

		initialize: function() {
			var hash = window.location.hash.replace(/\/.*/,'');
			if(hash === '#work') {
				this.tmpl = hbs.projectThumbs;
			} else {
				this.tmpl = hbs.labsThumbs;
			}
		},

		render: function(id) {
			this.$el.html(this.tmpl(folioCollection));
			this.$el.appendTo($('#content'));
			this.initElements(id);
			this.sortCarousel()
			this.initEvents();
			return this;
		},

		initElements: function(id) {
			this.$scrollable = this.$el.find('.slider');
			this.$scrollLeft = this.$el.find('.scroll-right');
			this.$scrollRight = this.$el.find('.scroll-left');
			this.$currentProjectImg = this.$el.find('[data-id="'+id+'"]');
			this.$projectList = this.$el.find('ul.list');
			this.$thumbnails = this.$el.find('ul.list img');
		},
		
		initEvents: function() {
			var self = this;
			//carousel scroll functions
			this.$scrollLeft.click(function(e) {
				e.preventDefault();
				self.$scrollable.animate({
					scrollLeft: self.$scrollable[0].scrollLeft+200
				}, 200, function(){return false});
			});
			this.$scrollRight.click(function(e) {
				e.preventDefault();
				self.$scrollable.animate({
					scrollLeft: self.$scrollable[0].scrollLeft-200
				}, 200, function(){return false});
			});
		},

		triggerRoute: function(ev) {
			var id = $(ev.target).data('id');
			this.trigger('detailView', id);
			this.$thumbnails.fadeTo(0,0.5);
			$(ev.target).fadeTo(0,1);
			$('html, body').animate({scrollTop:0}, 400);
			return false;
		},

		sortCarousel: function() {
			this.$currentProjectImg.fadeTo(0,1);
		}
	});

	return ThumbsView;
});