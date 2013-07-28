SRSLY_v3
========

Vicki's portfolio site
--------------

### Stuff you might want to know...

The site is built as a SPA (Single Page Application) using [Backbone.js](http://backbonejs.org/) as a framework. It uses [Require.js](http://requirejs.org/) for nice, neat modularised code and uses [Grunt](http://gruntjs.com/) for automation and build tools. Templating is handled by [handlebars](http://handlebarsjs.com/), CSS is pre-processed and compiled using [Stylus](http://learnboost.github.io/stylus/).

Portfolio and lab items are stored as data objects (js/components/models.js) making it easy to add new projects and each view has it's own js file, enabling easy code maintenance. Likewise, each component has it's own .styl file for easy CSS maintenance.

#### Known issues:

- Twitter embedded timeline only loads on server refresh, not navigation within the app.
- The distribution JS is not yet working so AMD modules are being loaded singularly, resulting in multiple unnecessary http requests. This is due to some require js loading conflicts and will hopefully be fixed soon.

#### Future improvement:

- Add a carousel to the detail view so additional project images can be viewed.