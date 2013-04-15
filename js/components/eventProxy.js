define([
	"components/detail-view",
	"libs/backbone"
], 

function(DetailView, Backbone) {

	var eventProxy = {};
	_.extend(eventProxy, Backbone.Events);

	eventProxy.on('all', function(eventName){
		this.trigger(eventName);
		console.log('hullo, can anybody hear me?');
	});

	console.log(eventProxy);
	return eventProxy;
});
