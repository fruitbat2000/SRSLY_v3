define(['libs/handlebars'], function(Handlebars) {

this["hbs"] = this["hbs"] || {};

this["hbs"]["detail"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row1 detail-view\">\r\n	<a href=\"#work\">&laquo; Back to list</a>\r\n	<div class=\"column_6 col1\">\r\n		<img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.images)),stack1 == null || stack1 === false ? stack1 : stack1[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n	</div>\r\n	<div class=\"column_6 col2\">\r\n		<div class=\"project-details\">\r\n			<h1>"
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\r\n			<p>";
  stack2 = ((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</p>\r\n			<section id=\"skills\">\r\n				<h2>skills = ["
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.skills)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "];</h2>\r\n			</section>\r\n		</div>\r\n	</div>\r\n</div>\r\n";
  return buffer;
  });

this["hbs"]["home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"main-image\">\r\n	<div class=\"img1\">\r\n		<img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0[0]),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.images)),stack1 == null || stack1 === false ? stack1 : stack1[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0[0]),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\r\n	</div>\r\n	<div class=\"img2\">\r\n		<img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0[1]),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.images)),stack1 == null || stack1 === false ? stack1 : stack1[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0[1]),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\r\n	</div>\r\n	<div class=\"img3\">\r\n		<img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0[2]),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.images)),stack1 == null || stack1 === false ? stack1 : stack1[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0[2]),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\r\n	</div>\r\n</div>\r\n<div class=\"row1\">\r\n	<div class=\"column_6 col1\">\r\n		<section id=\"intro\">\r\n			<h1 class=\"inline-title\">Hello World!</h1>\r\n			<p>Welcome to my small corner of the interwebs. I'm a front end web developer who's serious about making great web experiences across all manner of platforms and projects. I've been lucky enough to work for some of the world's biggest brands - you can take a look at my <a href=\"#work\">WORK</a> here. When I'm not coding, I'm generally... coding, so take a look at some of my 'for fun' projects in the <a href=\"#labs\">LABS</a> section.</p>\r\n		</section>\r\n		<section id=\"skills\">\r\n			<h2>mainSkills = [HTML(5), CSS(3), JavaScript, jQuery];</h2>\r\n			<h3>haveUsed = [knockout.js, backbone.js, require.js, node.js, grunt, stylus];</h3>\r\n			<h3>otherSkills = [WordPress theme development, web design, branding];</h3>\r\n		</section>\r\n	</div>\r\n	<div class=\"column_6 col2\">\r\n		<nav class=\"feature-nav\">\r\n			<ul>\r\n				<li class=\"first\"><span>{}</span><a href=\"#work\">Work</a></li>\r\n				<li class=\"second\"><span><></span><a href=\"#labs\">Labs</a></li>\r\n				<li class=\"third\"><span>:)</span><a href=\"#about\">About</a></li>\r\n			</ul>\r\n		</nav>\r\n		<section class=\"twitter\">\r\n			<h2>Twitter</h2>\r\n			<p>Here's a fake tweet Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. <br>Date: 22/2/13. Time: 13.42:</p>\r\n		</section>\r\n	</div>\r\n</div>";
  return buffer;
  });

this["hbs"]["projectThumbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<li class=\"column_2\" data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n				<img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.images)),stack1 == null || stack1 === false ? stack1 : stack1[2])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n			</li>\r\n		";
  return buffer;
  }

  buffer += "<section id=\"project-thumbs\">\r\n	<a class=\"column_1 scroll-left\" href=\"\">&lsaquo;</a>\r\n	<div class=\"slider\">\r\n		<ul class=\"list\">\r\n		";
  stack1 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</ul>\r\n	</div>\r\n	<a class=\"column_1 scroll-right\" href=\"\">&rsaquo;</a>\r\n</section>";
  return buffer;
  });

this["hbs"]["work"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	<li class=\"column_4\" data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n		<img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.images)),stack1 == null || stack1 === false ? stack1 : stack1[1])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n	</li>\r\n	";
  return buffer;
  }

  buffer += "<ul class=\"folio-list\">\r\n	";
  stack1 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>\r\n<section id=\"client-list\">\r\n	<h2>clientList = ['Premier Inn', 'Colgate', 'Xbox', 'SAP Banking', 'Whitbread', 'Premier League', 'Nestle', 'Microsoft'];</h2>\r\n</section>";
  return buffer;
  });

return this["hbs"];

});