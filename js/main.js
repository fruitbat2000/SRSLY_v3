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
	"components/work-view",
	"components/detail-view",
	"components/models"
],

function(_, Backbone, Handlebars, AppView, HomeView, WorkView, DetailView, models) {

	Backbone.View.prototype.close = function(){
		this.remove();
		//this.unbind();
	}

	var Router = Backbone.Router.extend({
		routes: {
			'home' : 'home',
			'work' : 'work',
			'folio/:id' : 'folio'
		},

		initialize: function(){
			this.appView = new AppView();
			var homeView = new HomeView();
			this.appView.showView(homeView);
		},

		home: function() {
			var homeView = new HomeView();
			this.appView.showView(homeView);
		},

		work: function() {
			var self = this;
			var workView = new WorkView();
			this.appView.showView(workView);
			workView.on('detail view', function(id) {
			 	self.navigate('folio/'+id, {trigger: true});
			});
		},

		folio: function(id) {
			var self = this;
			var detailView = new DetailView();
			this.appView.showView(detailView, id);
			detailView.on('detail view', function(id) {
				self.navigate('folio/'+id);
				self.appView.showView(detailView, id);
			});
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