define([
	"libs/jquery",
	"libs/underscore",
	"libs/backbone"
], 
function($, _, Backbone){

	var FolioItem = Backbone.Model.extend({
		defaults: {
			title: '',
			images: [],
			description: '',
			skills: []
		},
	});

	var folioCollection = Backbone.Collection.extend({
		model: FolioItem
	});

	var folioItems = new folioCollection()

	folioItems.add([
		new FolioItem({title: 'Colgate', description: 'this is a pretend Colgate project', skills: ['HTML', 'CSS', 'JavaScript']}),
		new FolioItem({title: 'Xbox', description: 'this is a pretend Xbox project', skills: ['HTML', 'AMPScript', 'XSLT']})
	]);

	return folioItems.models;
});
	

