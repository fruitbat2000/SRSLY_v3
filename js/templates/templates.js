define(['libs/handlebars'], function(Handlebars) {

this["hbs"] = this["hbs"] || {};

this["hbs"]["about"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"row1 about\">\r\n	<div class=\"column_6 col1\">\r\n		<h1>About me</h1>\r\n		<section class=\"about-me\">\r\n			<p class=\"intro\">I'm Vicki Keeley, a front end web developer from London. I hate writing 'About Me' pages so here are some key facts instead:</p>\r\n			<p><strong>Born:</strong>1980, Bristol</p>\r\n			<p><strong>Lives:</strong>Plaistow, London</p>\r\n			<p><strong>Pets:</strong>Random the cat</p>\r\n			<p><strong>In my spare time I...</strong>experiment with new code stuff, play computer games, read books, listen to music, climb fake rocks indoors.</p>\r\n			<p><strong>If you're making a brew I'll have...</strong>Redbush tea, milk, no sugar.</p>\r\n			<p><strong>When I was growing up I wanted to be...</strong>A wizard or a hero. Or a heroic wizard.</p>\r\n			<p><strong>Fave games:</strong>Anything where I get to be a hero/wizard (see previous comment). Currently I'm quite addicted to Guild Wars 2.</p>\r\n			<p><strong>Fave authors:</strong>Jeanette Winterson, Murakami, David Mitchell, Bronte, Jasper Fforde, Ali Smith and loads more. Love books &lsaquo;3.</p>\r\n			<p><strong>Fave music:</strong>Anything from Chase &amp; Status to Joan Jett &amp; The Blackhearts to Suzanne Vega to Mussorgsky. Love music &lsaquo;3.</p>\r\n		</section>\r\n	</div>\r\n	<div class=\"column_6 col2\">\r\n		<section class=\"contact\">\r\n			<h2>Find me on the interwebs...</h2>\r\n			<a href=\"http://uk.linkedin.com/in/vickikeeley/\" target=\"_blank\" class=\"social\"><img src=\"images/linkedin.png\" alt=\"LinkedIn\">LinkedIn</a>\r\n			<a href=\"\" target=\"_blank\" class=\"social\"><img src=\"images/twitter.png\" alt=\"Twitter\">Twitter</a>\r\n			<h2>Get in touch...</h2>\r\n			<a href=\"mailto:hello@srsly.me.uk\" target=\"_blank\" class=\"mailto\">hello@srsly.me.uk</a>\r\n		</section>\r\n	</div>\r\n</div>\r\n";
  });

this["hbs"]["detail"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\r\n		<a href=\"#labs\">&laquo; Back to list</a>\r\n	";
  }

function program3(depth0,data) {
  
  
  return "\r\n		<a href=\"#work\">&laquo; Back to list</a>\r\n	";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n				<a href=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\r\n			";
  return buffer;
  }

  buffer += "<div class=\"row1 detail-view\">\r\n	";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.labs), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n	<div class=\"column_6 col1\">\r\n		<img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.images)),stack1 == null || stack1 === false ? stack1 : stack1[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n	</div>\r\n	<div class=\"column_6 col2\">\r\n		<div class=\"project-details\">\r\n			<h1>"
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\r\n			<p>";
  stack2 = ((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</p>\r\n			";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.url), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n			<section id=\"skills\">\r\n				<h2>skills = ["
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
    + "\"/>\r\n	</div>\r\n</div>\r\n<div class=\"row1\">\r\n	<div class=\"column_6 col1\">\r\n		<section id=\"intro\">\r\n			<h1 class=\"inline-title\">Hello World!</h1>\r\n			<p>Welcome to my small corner of the interwebs. I'm a front end web developer who's serious about making great web experiences across all manner of platforms and projects. I've been lucky enough to work for some of the world's biggest brands inlcluding Xbox, Premier Inn, Colgate, SAP etc - you can take a look at my <a href=\"#work\">WORK</a> here. When I'm not coding, I'm generally... coding, so take a look at some of my 'for fun' projects in the <a href=\"#labs\">LABS</a> section.</p>\r\n		</section>\r\n		<section id=\"skills\">\r\n			<h2>mainSkills = [HTML(5), CSS(3), JavaScript, jQuery];</h2>\r\n			<h3>haveUsed = [knockout.js, backbone.js, require.js, node.js, grunt, stylus];</h3>\r\n			<h3>otherSkills = [WordPress theme development, web design, branding];</h3>\r\n		</section>\r\n	</div>\r\n	<div class=\"column_6 col2\">\r\n		<nav class=\"feature-nav\">\r\n			<ul>\r\n				<li class=\"first\"><span>{}</span><a href=\"#work\">Work</a></li>\r\n				<li class=\"second\"><span><></span><a href=\"#labs\">Labs</a></li>\r\n				<li class=\"third\"><span>:)</span><a href=\"#about\">About</a></li>\r\n			</ul>\r\n		</nav>\r\n		<section class=\"twitter\">\r\n			<h2>Twitter</h2>\r\n			<a class=\"twitter-timeline\" href=\"https://twitter.com/srsly_vicki/dev-stuff\" data-widget-id=\"361460682681643008\" data-tweet-limit=\"1\" height=\"100px\" data-chrome=\"noheader transparent noborders\">Tweets from @srsly_vicki/dev-stuff</a>\r\n			<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script>\r\n\r\n		</section>\r\n	</div>\r\n</div>";
  return buffer;
  });

this["hbs"]["labs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n		";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.labs), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<li class=\"column_4\" data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n				<img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.images)),stack1 == null || stack1 === false ? stack1 : stack1[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n			</li>\r\n		";
  return buffer;
  }

  buffer += "<section class=\"labs-intro\">\r\n	<h1>Labs</h1>\r\n	<p>Below you can find a few of the personal projects I've taken on as a way to learn new stuff. Be warned, they're not exactly polished and probably work best in a modern browser ;)</p>\r\n</section>\r\n<ul class=\"folio-list labs-list\">\r\n	";
  stack1 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;
  });

this["hbs"]["labsThumbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n		";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.labs), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n			<li class=\"column_2\">\r\n				<img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.images)),stack1 == null || stack1 === false ? stack1 : stack1[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-id=\"";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\r\n			</li>\r\n		";
  return buffer;
  }

  buffer += "<a class=\"column_1 scroll-left\" href=\"\">&lsaquo;</a>\r\n<div class=\"slider\">\r\n	<ul class=\"list\">\r\n	";
  stack1 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</ul>\r\n</div>\r\n<a class=\"column_1 scroll-right\" href=\"\">&rsaquo;</a>\r\n";
  return buffer;
  });

this["hbs"]["projectThumbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n		";
  stack2 = helpers.unless.call(depth0, ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.labs), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n			<li class=\"column_2\">\r\n				<img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.images)),stack1 == null || stack1 === false ? stack1 : stack1[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-id=\"";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\r\n			</li>\r\n			";
  return buffer;
  }

  buffer += "<a class=\"column_1 scroll-left\" href=\"\">&lsaquo;</a>\r\n<div class=\"slider\">\r\n	<ul class=\"list\">\r\n	";
  stack1 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</ul>\r\n</div>\r\n<a class=\"column_1 scroll-right\" href=\"\">&rsaquo;</a>\r\n";
  return buffer;
  });

this["hbs"]["work"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n		";
  stack2 = helpers.unless.call(depth0, ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.labs), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<li class=\"column_4\" data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n				<img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.images)),stack1 == null || stack1 === false ? stack1 : stack1[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n			</li>\r\n		";
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