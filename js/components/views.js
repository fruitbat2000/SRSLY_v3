define([
	"templates/home",
	"components/models",
	"libs/handlebars"
], 

function(home, models, Handlebars) {

	var home_tmpl = Handlebars.templates['home.html'];

	var render = function(tmpl, context) {
		$("#content").html(tmpl(context));
	}
	render(home_tmpl, models);
});