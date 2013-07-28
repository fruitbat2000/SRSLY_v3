require.config({
	shim: {
		"libs/handlebars": {
			exports: 'Handlebars'
		},
		"libs/underscore": {
			exports: '_'
		},
		"libs/backbone": {
			deps: ['libs/underscore', 'libs/jquery'],
			exports: 'Backbone'
		}
	}
})
require([
	"libs/underscore",
	"libs/backbone",
	"libs/handlebars",
	"components/app-view",
	"components/home-view",
	"components/list-view",
	"components/detail-view",
	"components/thumbs-view",
	"components/about-view",
	"components/models"
],

function(_, Backbone, Handlebars, AppView, HomeView, ListView, DetailView, ThumbsView, AboutView, models) {

	Backbone.View.prototype.close = function(){
		this.remove();
		this.unbind();
	}

	var Router = Backbone.Router.extend({
		
		routes: {
			'home' : 'home',
			'work' : 'work',
			'work/:id' : 'folio',
			'about' : 'about',
			'labs'	: "labs",
			'labs/:id'	: "labFolio" 
		},

		initialize: function(){
			this.appView = new AppView();
			var homeView = new HomeView();
			this.appView.showView(homeView);
			this.folioColl = models;
		},

		home: function() {
			var homeView = new HomeView();
			this.appView.showView(homeView);
		},

		work: function() {
			var self = this;
			var listView = new ListView();
			this.appView.showView(listView);
			listView.on('detailView', function(id) {
			 	self.navigate('work/'+id, {trigger: true});
			});
		},

		folio: function(id) {
			var self = this;
			var detailView = new DetailView();
			var thumbsView = new ThumbsView();
			this.appView.showView(detailView, id, this.folioColl);
			thumbsView.render(id);
			thumbsView.on('detailView', function(id) {
				self.navigate('work/'+id);
				self.appView.showView(detailView, id, self.folioColl);
			});
		},

		labs: function() {
			var self = this;
			var listView = new ListView();
			this.appView.showView(listView);
			listView.on('detailView', function(id) {
				self.navigate('labs/'+id, {trigger: true});
			});
		},

		labFolio: function(id) {
			var self = this;
			var detailView = new DetailView();
			var thumbsView = new ThumbsView();
			this.appView.showView(detailView, id, this.folioColl);
			thumbsView.render(id);
			thumbsView.on('detailView', function(id) {
				self.navigate('labs/'+id);
				self.appView.showView(detailView, id, self.folioColl);
			});
		},

		about: function() {
			var aboutView = new AboutView();
			this.appView.showView(aboutView);
		}

	});

	function App() {
		var router = new Router();

		this.start = function() {
			Backbone.history.start();
		}
	} 

	new App().start();
});