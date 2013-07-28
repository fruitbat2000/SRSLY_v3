define([
	"libs/backbone"
], 

function(Backbone) {

	function AppView() {
		this.showView = function(view, id, collection) {
			if(this.currentView) {
				this.currentView.close();
			}
			
			this.currentView = view;
			this.currentView.render(id, collection);

			if(this.currentView.id === 'detailView') {
				$('#content').prepend(this.currentView.el);
			} else {
				$('#content').html(this.currentView.el);
			}
		}
	}

	return AppView;
});
