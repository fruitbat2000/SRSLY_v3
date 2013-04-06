define(['libs/handlebars'], function(Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['home.html'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"main-image\">\r\n	<p>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0[0]),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\r\n	<p>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0[1]),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\r\n	<p>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0[1]),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.skills)),stack1 == null || stack1 === false ? stack1 : stack1[2])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\r\n</div>\r\n<div class=\"row1\">\r\n	<div class=\"column_4 col1\">\r\n		<section id=\"intro\">\r\n			<h1 class=\"inline-title\">Hello World!</h1>\r\n			<p>Welcome to my small corner of the interwebs. I'm a front end web developer who's serious about making great web experiences across all manner of platforms and projects. I've been lucky enough to work for some of the world's biggest brands - you can take a look at my <a href=\"\">WORK</a> here. When I'm not coding, I'm generally... coding, so take a look at some of my 'for fun' projects in the <a href=\"\">LABS</a> section.</p>\r\n		</section>\r\n		<section id=\"skills\">\r\n			<h2>mainSkills = [HTML(5), CSS(3), JavaScript, jQuery];</h2>\r\n			<h3>haveUsed = [knockout.js, backbone.js, require.js, node.js, grunt, stylus];</h3>\r\n			<h3>otherSkills = [WordPress theme development, web design, branding];</h3>\r\n		</section>\r\n	</div>\r\n	<div class=\"column_4 col2\">\r\n		<nav class=\"feature-nav\">\r\n			<ul>\r\n				<li class=\"first\"><span>{}</span><a href=\"\">Work</a></li>\r\n				<li class=\"second\"><span><></span><a href=\"\">Labs</a></li>\r\n				<li class=\"third\"><span>:)</span><a href=\"\">About</a></li>\r\n			</ul>\r\n		</nav>\r\n		<section class=\"twitter\">\r\n			<h2>Twitter</h2>\r\n			<p>Here's a fake tweet Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. <br>Date: 22/2/13. Time: 13.42:</p>\r\n		</section>\r\n	</div>\r\n</div>";
  return buffer;
  });
});