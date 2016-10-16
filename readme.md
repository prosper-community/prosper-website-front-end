# Prosper Website Front-End
This is a public repository for the Prosper website's front-end. It is based upon [Zurb Foundation 6 Template](https://github.com/zurb/foundation-sites-template) which is a front-end framework with [Gulp](https://github.com/gulpjs/gulp) and basic templating with [Handlebars](http://handlebarsjs.com/) and [Panini](https://github.com/zurb/panini).

## Trello Board
We've created a public trello board if anyone wants to help move this project forward they can assign themselves to a specific task and join the Prosper Community.

[Prosper — Website Trello Board](https://trello.com/b/yDgQXvDZ/prosper-website)

## ZURB Template

**Please open all issues with this template on the main [Foundation for Sites](https://github.com/zurb/foundation-sites/issues) repo.**

This is the official ZURB Template for use with [Foundation for Sites](http://foundation.zurb.com/sites). ZURB uses this template to deliver static code to their clients. It has a Gulp-powered build system with these features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript concatenation
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

### Dependencies

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.10 or greater)
- [Git](https://git-scm.com/)

This template can be installed with the Foundation CLI, or downloaded and set up manually.

## Getting Started
You should be comfortable with the command line interface (CLI). If you're not this tutorial won't help you get started and you'll need to learn how to use the CLI first. It's super easy.

1. Git clone repo `git clone git@github.com:prosper-community/prosper-website-front-end.git`

2. Change directory into your cloned repo.

3. Run `npm install` (beware of any errors flagged during install).

5. Run `bower install`.

6. Run `foundation watch` (this should open a new browser tab with the homepage of the website).

7. You're ready to go! See the [Contributing](#contributing) section below.

## Contributing
Any contributions should be made in a *new branch* named according to the feature / improvement you are adding. Here is an example workflow in the CLI:

1. First, make sure your master branch is up to date: `git pull origin master`

2. `git checkout -b fix-mobile-nav-bug`

3. Run `foundation watch`

4. Make any changes to the source code in the `src` folder

5. Add your changes to git `git add .`

6. Commit your changes: `git commit -m 'fixed mobile nav bug by changing width on li element at breakpoint medium; tested on > IE9'`

7. Push your changes to the remote branch: `git push origin fix-mobile-nav-bug`

8. Open up the repository on Github and select 'Submit Pull Request'

9. Detail the changes you made and mention any contributors for review.

10. Always let someone else in the Prosper Community review your pull request and merge into master. Never push directly into master or merge your own branches.

## File Structures, Styles & Naming Conventions

The basic file structure of the `src` folder is as follows:

- assets
  - img (all images go here)
  - js (all scripts go here)
  - scss (all styles go here)
- data (you guessed it, your data goes here)
- helpers (reusable [Panini](https://github.com/zurb/panini) helpers here)
- layouts (these are your base page layouts, at the moment there is only one single-column layout `default.html`. All `pages` content is fed into this layout)
- pages (individual pages and thei)
- partials (reusable blocks of html such as `header.html` and `footer.html`)
- styleguide (Foundation 6 Template has a Gulp task that dynamically generates a styleguide. Can be customized by editing `styleguide/index.md` and `styleguide/template.html`)

*Any changes you make should take place in one of the above folders.* Don't create any new root-level folders within `src`.

### Styles
The `scss` folder is structured according to the [SMACSS](https://smacss.com/) convention with one small exception: `03-modules` is named as `03-components` as to be congruent with Foundation 6's component-based design.

- 01-base (base styles go here: `_typography.scss`, `_variables.scss`, `_mixins.scss`, etc.)
- 02-layout (layout associated styles (prefixed by `l-`) go here: `_l-default.scss`, `_l-footer.scss`, etc.)
- 03-components (all of your componentrelated styling should go here and be organized by each component: `_button.scss`, `_card.scss`, `_people-list.scss`, etc.)
- 04-state (all state related styling should go here. Read [SMACSS](https://smacss.com/) if you don't know what this means)

### Naming Conventions
The CSS selector naming conventions you write should follow [BEM](http://getbem.com/naming/). If you find a component that doesn't follow these naming conventions, a pull request would be welcomed to make our codebase more consistent and maintainable.

If you've never followed SMACSS or BEM before, it's a great opportunity to improve your SCSS chops and write cleaner more modular style sheets.

## How It Works
If you're curious how all the pieces of the fit together, here's a basic overview:

- `node_modules` has all of the development dependencies needed to run all of the Gulp tasks for this template.
- Gulp is an automation worflow tool that harnesses the power of node streams to perform repeated development tasks in an 'assembly line'-like manner. Compiling html, processing styles, compressing images, concatenating javascript, loading the server and refreshing the page all happens within Gulp. The tasks are defined inside `gulpfile.js`. If you're curious about any one of the tasks, take a look at the gulpfile and read more into Gulp.
- [Foundation-CLI](https://github.com/zurb/foundation-cli) acts as a layer of abstraction *above* gulp to simplify things a bit. When you run `foundation`, you're really running `gulp watch`. When you run `foundation build` you're really running `gulp build --production`
- Once satisfied with the state of `src`, you can run the `foundation build` task which will compile and minify all your scripts into one script, process  and minify all your styles into one stylesheet, and all your pages through the layouts into individual HTML pages. It will also compress your images using [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin). It puts everything into a root-level `dist` folder which can then be put into the CMS in production.

## Front-End & Prosper CMS
All changes to the website should start at this [Prosper Website Front-End ](https://github.com/prosper-community/prosper-website-front-end) repo and when everything is good to go built into a `dist` folder that can be then extended into the [Prosper CMS](https://github.com/prosper-community/prosper-website-cms). If you find an issue with the *front-end* of the Prosper CMS, please fix it in this front-end repo *first* and then add it to the CMS. This will keep the two repos consistent and up-to-date.

A basic workflow for this could be:

- Identify bug on the production site
- Fire up the front-end and replicate bug
- Fix bug on the front-end
- Build for production
- Copy necessary files / assets into the [Prosper CMS](https://github.com/prosper-community/prosper-website-cms)

# Copyright
Copyright (c) 2015-2016 Prosper Community
