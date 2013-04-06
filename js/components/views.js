define([
	"text!templates/home.html",
	"components/models"
], 

function(home_template, models) {

	var compiledTemplate = Handlebars.compile(home_template);

	var render = function(tmpl, context) {
		$("#content").html(tmpl(context));
	}
	render(compiledTemplate, models);
});