#Welcome to Edpanel Marketting

I've set up a little react-bootstrap site. It's really only a view at this point, but hey, there's a thing that shows up 
on a page.

##Toolchain
1. Gulp
2. NPM
3. Browserify leveraging Babel
4. React
5. React-Bootstrap
6. ES6

## Gulp Structure
I have set up gulp to be pretty modular. The main file is 'gulpfile.js', and all it does is import all of the tasks defined
under the gulp directory. I stole this pattern from a 'material-ui' example because I thought it looked really nice. I also
stole most of the tasks from them as well and then augmented with some of my own :-). It leverages a config file to package
up all of th options we might need for a particular task and each of the tasks imports the config. This can be extended in the future
to create different types of builds depending on the environment. I hope it's useful and not a pain in the arse.

How it all builds - check out the build.js file. Pretty much what this is doing is taking all of our react source code and
bundling it together into a single js file under the name 'app.js'. Then we take all of the static assets, and copy those over
to the build file as well. We extract and copy over and sassify the react-bootstrap css and any customizations we have made to it, 
and then we copy over all of our images and things.

## Code Structure
All of the actual code lives under '/src'. Under app is where all of the react 'components', 'actions', and 'stores' would live. I
have been loosely following the 'flux' model, but at the moment all I have implemented are a few components that layer up, plus 
one onClick method that does very little. All of the static assets live under '/www'. 

There is only one index.html that mounts a single component 'app'. React handles the rest of the page state and composition. This
allows us to control everything from components themselves rather than mucking around in the index.html all the time.

## CSS
For any custom components, I have opted for co-locating the styling directly on the component. This allows you to modify 
everything in one place. I'm not sure this is the best practice, but man does my java rat brain love it.

For any modification of bootstrap CSS, I have created a sass structure that allows you to create custom scss files per
component you are overriding, and then import it into customizations.scss. When we build everything will be 'sassified' 
into a single customizations.css. have a look at '/src/www/assets/stylesheets/navbar.scss' as an example.

###Things I was hoping to do next
*Set up the modal form to send an email to the team. 
*Add more content beyond the top section.
*Rename a bunch of stuff.

## Running the service

NPM install all the things!
under your main directory run - 
'npm install'

All you need to do to start the service is run - 
'gulp watch'

You can set this up in intellij as a gulp configuration or just run it in the command line.




