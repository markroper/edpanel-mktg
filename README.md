#Edpanel Marketing Site

This project contains the EdPanel marketing website in `src/` and a node express app with a single endpoint that emails feedback when posted to within `submitfeedback`. Each project has its own `package.json` defining dependencies.

##Toolchain
1. Gulp <- build
2. NPM <- package manager for node
3. Browserify leveraging Babel <- for running the app in developer mode with live refresh
4. AngularJs <- UI app framework
5. Bower <- client side dependency injector
6. Angular Material Design <- UI design framework
7. Express <- Node http server framework

## Gulp Structure
I have set up gulp to be pretty modular. The main file is 'gulpfile.js', and all it does is import all of the tasks defined
under the gulp directory.

## Gulp tasks

* `gulp` or `gulp build` to build an optimized version of the application in `/dist`
* `gulp serve` to launch a browser sync server on the source files
* `gulp serve:dist` to launch a server on the optimized application
* `gulp wiredep` to fill bower dependencies in the `.html` file(s)
* `gulp test` to launch the unit tests with Karma
* `gulp test:auto` to launch the unit tests with Karma in watch mode
* `gulp protractor` to launch the e2e tests with Protractor
* `gulp protractor:dist` to launch the e2e tests with Protractor on the dist files


## How do I get set up?

* Install the [node runtime](http://nodejs.org/) & add to path
* Once node is installed and on the path, run `npm install -g bower gulp`
* Go to the root of the repo and run `npm install && bower install`
* Change directory to the root of the project and experiment with the gulp commands!

### What is the folder structure? ###

Within `src/` is the client code, html, styles, etc.  The main entry point to the angular app is in `src/app/index.js`.  All the individual directives, route controllers, and static assets can be found within `src/app/components/` in their respective folders.  I've tried to create one JS file per angular directive, controller, factory, or service defined.  For controllers, I've colocated the controller js code in a folder with its realted html template and .scss style file.

All top level folders other than `src` are either managed by NPM, bower, or gulp with the exception of the `/gulp` folder, which contains gulp config files that are maintained by us, the humans.