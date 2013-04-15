define([
	"libs/backbone"
], 

function(Backbone) {

	function AppView() {
		this.showView = function(view, id) {
			
			if(this.currentView) {
				this.currentView.close();
			}
			
			this.currentView = view;
			this.currentView.render(id);

			$('#main-content').html(this.currentView.el);
		}
	}

	return AppView;
});
