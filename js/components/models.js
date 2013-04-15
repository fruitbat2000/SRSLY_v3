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
		new FolioItem({id: 'ciol', title: 'Premier Inn Check-in Online', images: ['images/ciol1.png', 'images/ciol1_list.png', 'images/ciol1_thumb.png'], description: "Check-in online is a major new addition to the booking process on the Premier Inn website. It allows users to avoid the hassle of checking-in when they arrive at the hotel whilst also prompting them to add meals and wifi etc to the their booking. I worked alongside a Senior Dev and was responsible for all the HTML and CSS development. The site uses some progressive enhancement techniques in regards to CSS3 styles and is designed to work in all browsers from ie6 upwards - lots of lovely cross-browser testing!", skills: ['HTML', ' CSS', ' JavaScript']}),
		new FolioItem({id: 'colgate', title: 'Colgate Interdental Data Capture', images: ['images/colgate1.png', 'images/colgate1_list.png', 'images/colgate1_thumb.png'], description: "The new Colgate Total Interdental toothpaste launched with a campaign offering people free samples, so I built a data capture page where they could leave their details in order to receive the sample. It's not hugely complex, but it is fully responsive and uses a third party CRM system to host the form and collect the data. The third party software is pretty archaic (tables!) so part of the challenge was making it work with the designs as best as possible.", skills: ['HTML', ' CSS', ' jQuery', ' Responsive']}),
		new FolioItem({id: 'sap', title: 'SAP Banking View', images: ['images/sap1.png', 'images/sap1_list.png', 'images/sap1_thumb.png'], description: "The SAP Banking View blog is a fully responsive WordPress site with a few custom widgets and the like. It's built on the skeleton framework and uses device detection as well as media queries to provide the best possible experience across mobile and tablet platforms (including old-school Blackberry!). I did a bit of everything on this one - PHP for the theme development, HTML, CSS, bits of jQuery and setting up the CMS ready to be taken on by our content strategist.", skills: ['HTML', ' CSS', ' jQuery', ' PHP', ' WordPress', ' Responsive']}),
		new FolioItem({id: 'xbox', title: 'Xbox CRM', images: ['images/xbox1.png', 'images/xbox1_list.png', 'images/xbox1_thumb.png'], description: "Xbox have a massive global CRM programme in Europe covering 23 different markets and broadcasting to more than 8 million people. Each bespoke email is built using an XSLT template, allowing us to pass each locale's content through it via an XML document and generate HTML emails that can be broadcast from Exact Target.<br><br> I have the dubious honour of being Technical Team Leader for the Xbox account, which means having final sign-off of all emails prior to broadcast as well as overseeing one other developer.", skills: ['HTML', ' XSLT', ' XML', ' AMPScript', ' Exact Target']}),
		new FolioItem({id: 'tep', title: 'The Empowerment Plan', images: ['images/ellie1.png', 'images/ellie1_list.png', 'images/ellie1_thumb.png'] ,description: "The Empowerment Plan is a system for rediscovering/maintaining wellbeing for people who are suffering from chronic health conditions. I was asked to design and build a site that would provide people with information about the plan and its practitioner and encourage them to give it a go. I did everything from branding to site design to build", skills: ['HTML', ' CSS', ' jQuery', ' Web Design', ' Branding']}),
		new FolioItem({id: 'srsly', title: 'SRSLY Website', images: ['images/srsly1.png', 'images/srsly1_list.png', 'images/srsly1_thumb.png'], description: "This website was a bit of a sandbox project for me and allowed me to try out a whole host of technologies without an end  client to pander to. It's built as a single page JavaScript app using Backbone.js and Require JS. It uses Handlebars templates and Stylus CSS preprocessing and my development environment whilst building it was based on node.js with grunt to automate stuff. <br><br>It's responsive and uses some fancy CSS3 transforms etc, which degrade gracefully (ish) in older browsers", skills: ['HTML', ' CSS', ' jQuery', ' Stylus', ' Backbone', ' Require', ' node', ' grunt', ' Responsive']})
	]);
	
	return folioItems;
});
	

