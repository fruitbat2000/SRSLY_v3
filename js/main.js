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
	"libs/jquery",
	"libs/underscore",
	"libs/backbone",
	"libs/handlebars",
	"components/home-view",
	"components/models"
],

function($, _, Backbone, Handlebars, homeView, models) {

});