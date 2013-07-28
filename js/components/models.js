define([
	"libs/underscore",
	"libs/backbone"
], 
function(_, Backbone){

	var FolioItem = Backbone.Model.extend({
		defaults: {
			id: '',
			title: '',
			images: [],
			description: '',
			skills: []
		}
	});

	var FolioCollection = Backbone.Collection.extend({
		model: FolioItem,

		byId: function(id) {
			for(var i = 0; i < this.models.length; i++) {
				if(this.models[i].attributes.id === id) {
					return this.models[i];
				}
			}
		}
	});

	var folioItems = new FolioCollection()

	folioItems.add([
		new FolioItem({labs: false, id: 'reviews', title: 'Colgate Review Centre', images: ['images/reviews1.png'], description: "The Colgate Review Centre is a single page JS app that allows customers to leave a review for Colgate products. It makes heavy use of the BazaarVoice API - a 3rd party product reviews service - to populate the product list and product details etc. The site is built in javascript/jQuery using require.js to manage AMD dependencies and grunt for automation. Templating is handled by handlebars and CSS is pre-processed using Stylus. It's also responsive and has a very different user journey on mobile.", skills: ['HTML', ' CSS', ' jQuery', ' Stylus', ' Require', ' node', ' grunt', ' Responsive', ' API']}),
		new FolioItem({labs: false, id: 'sap', title: 'SAP Banking View', images: ['images/sap1.png', 'images/sap1_list.png', 'images/sap1_thumb.png'], description: "The SAP Banking View blog is a fully responsive WordPress site with a few custom widgets and the like. It's built on the skeleton framework and uses device detection as well as media queries to provide the best possible experience across mobile and tablet platforms (including old-school Blackberry!). I did a bit of everything on this one - PHP for the theme development, HTML, CSS, bits of jQuery and setting up the CMS ready to be taken on by our content strategist.", skills: ['HTML', ' CSS', ' jQuery', ' PHP', ' WordPress', ' Responsive']}),
		new FolioItem({labs: false, id: 'ciol', title: 'Premier Inn Check-in Online', images: ['images/ciol1.png', 'images/ciol1_list.png', 'images/ciol1_thumb.png'], description: "Check-in online is a major new addition to the booking process on the Premier Inn website. It allows users to avoid the hassle of checking-in when they arrive at the hotel whilst also prompting them to add meals and wifi etc to the their booking. I worked alongside a Senior Dev and was responsible for all the HTML and CSS development. The site uses some progressive enhancement techniques in regards to CSS3 styles and is designed to work in all browsers from ie6 upwards - lots of lovely cross-browser testing!", skills: ['HTML', ' CSS', ' JavaScript']}),
		new FolioItem({labs: false, id: 'colgate', title: 'Colgate Interdental Data Capture', images: ['images/colgate1.png', 'images/colgate1_list.png', 'images/colgate1_thumb.png'], description: "The new Colgate Total Interdental toothpaste launched with a campaign offering people free samples, so I built a data capture page where they could leave their details in order to receive the sample. It's not hugely complex, but it is fully responsive and uses a third party CRM system to host the form and collect the data. The third party software is pretty archaic (tables!) so part of the challenge was making it work with the designs as best as possible.", skills: ['HTML', ' CSS', ' jQuery', ' Responsive']}),
		new FolioItem({labs: false, id: 'xbox', title: 'Xbox CRM', images: ['images/xbox1.png', 'images/xbox1_list.png', 'images/xbox1_thumb.png'], description: "Xbox have a massive global CRM programme in Europe covering 23 different markets and broadcasting to more than 8 million people. Each bespoke email is built using an XSLT template, allowing us to pass each locale's content through it via an XML document and generate HTML emails that can be broadcast from Exact Target.<br><br> I have the dubious honour of being Technical Team Leader for the Xbox account, which means having final sign-off of all emails prior to broadcast as well as overseeing one other developer.", skills: ['HTML', ' XSLT', ' XML', ' AMPScript', ' Exact Target']}),
		new FolioItem({labs: false, id: 'tep', title: 'The Empowerment Plan', images: ['images/ellie1.png', 'images/ellie1_list.png', 'images/ellie1_thumb.png'] ,description: "The Empowerment Plan is a system for rediscovering/maintaining wellbeing for people who are suffering from chronic health conditions. I was asked to design and build a site that would provide people with information about the plan and its practitioner and encourage them to give it a go. I did everything from branding to site design to build", skills: ['HTML', ' CSS', ' jQuery', ' Web Design', ' Branding']}),
		new FolioItem({labs: false, id: 'srsly', title: 'SRSLY Website', images: ['images/srsly1.png', 'images/srsly1_list.png', 'images/srsly1_thumb.png'], description: "This website was a bit of a sandbox project for me and allowed me to try out a whole host of technologies without an end  client to pander to. It's built as a single page JavaScript app using Backbone.js and Require JS. It uses Handlebars templates and Stylus CSS preprocessing and my development environment whilst building it was based on node.js with grunt to automate stuff. <br><br>It's responsive and uses some fancy CSS3 transforms etc, which degrade gracefully (ish) in older browsers", skills: ['HTML', ' CSS', ' jQuery', ' Stylus', ' Backbone', ' Require', ' node', ' grunt', ' Responsive']}),
		new FolioItem({labs: true, id: 'tamagotchi', title: 'Tamagotchi Town!', images: ['images/tama1.png'] ,description: "Tamagotchi Town was my first forray into object oriented programming in JS. It also has a bunch of CSS3 bits and bobs that I wanted to try out at the time - particularly the '3D' text etc. It's pretty silly and very much a first attempt at OO JS, but it has cats and everything on the internet is better with cats, right?<br><br>Note: I'm pretty sure this doesn't work in IE!", skills: ['HTML', ' CSS3', ' jQuery', ' OO JavaScript'], url:'http://labs.srsly.me.uk/tamagotchi'}),
		new FolioItem({labs: true, id: 'profitTracker', title: 'GW2 Profit Tracker', images: ['images/profitTracker.png'] ,description: "The GW2 profit tracker is a little project that I came up with as an excuse to try to out Knockout.js. It uses 2-way data bindings between the view and the view-model to update the UI automatically when inputs are changed. Having since looked at Knockout in a bit more detail, I would probably re-do this so that there was less JS in the DOM and make more use of custom bindings, but as a first introduction to the framework I found this pretty helpful.", skills: ['HTML', ' CSS', ' jQuery', ' Knockout.js'], url:'http://labs.srsly.me.uk/profit-tracker'}),
		new FolioItem({labs: true, id: 'srsly-labs', title: 'SRSLY Website', images: ['images/srsly1.png', 'images/srsly1_list.png', 'images/srsly1_thumb.png'], description: "This website was a bit of a sandbox project for me and allowed me to try out a whole host of technologies without an end  client to pander to. It's built as a single page JavaScript app using Backbone.js and Require JS. It uses Handlebars templates and Stylus CSS preprocessing and my development environment whilst building it was based on node.js with grunt to automate stuff. <br><br>It's responsive and uses some fancy CSS3 transforms etc, which degrade gracefully (ish) in older browsers", skills: ['HTML', ' CSS', ' jQuery', ' Stylus', ' Backbone', ' Require', ' node', ' grunt', ' Responsive']}),
		new FolioItem({labs: true, id: 'css-transforms', title: 'CSS 3D Transforms', images: ['images/rollovers.png'], description: "A selection of rollovers using CSS3 transforms, including some snazzy 3D ones. Some of them are pretty OTT, but it was a useful introduction to how some of the more complicated transforms work. <br><br> They should all have fallbacks, but if you want to see them in their full glory, you'll need to be using a nice, modern browser such as Chrome.", skills: ['HTML', ' CSS3'], url: 'http://labs.srsly.me.uk/css-transforms'})
	]);
	
	return folioItems;
});
	

