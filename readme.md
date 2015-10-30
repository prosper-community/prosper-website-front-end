# STRC Landing Page
This is a public repository for the STRC landing page. The front-end of the website is made from the [Generator Gulp Webapp](https://github.com/yeoman/generator-gulp-webapp). If you want to learn more about the website's scaffold, read the Gulp Webapp documentation first.

## Getting Started
### Requirements

- Git (>2.2.2)
- Node JS (>=0.12.0)
- NPM (>=3.3.3)
- Gulp (^3.9.0)
- Terminal / iTerm (CLI)

### Instructions

1. First, open up your CLI and clone the repository to your local machine:

`git clone git@github.com:johnellison/solve-the-refugee-crisis.git`

2. Change directories into 'solve-the-refugee-crisis':

`cd solve-the-refugee-crisis`

3. Then, install all the node modules (this may take a while):

`sudo npm install`

4. Install all the bower components (this may take a while):

`bower install`

5. Run the gulp 'serve' task:

`gulp serve`

At that point you should see the site running on your local machine.

## Making Contributions
Anyone who wants to make changes to the STRC website may fork this repository and open a pull request. Please provide detailed commit logs that describe the changes you propose, along with a concise description of your pull requests.

 Pull requests are merged based upon the following criteria:

- Proposed changes are clearly described in the title and comments of the pull request
- Updates or clarifies the current state of the project
- Increases accessibility
- Improves performance
- Improves design
- Improves usability
- Fixes a bug
- Improves documentation
- Makes some other incremental improvement not stated above but is a reasonable suggestion

## Testing
If you are creating new front-end functionality, please write a mocha test in the ./test/spec suite. Proposed functionality without tests will not be merged into master.

1. To run the tests, simply execute the Mocha Spec Runner:

`gulp serve:test`

You should see a simple interface which demonstrations your passed and failed assertions.

## Trello Board
I've created a public trello board if anyone wants to help move this project forward they can assign themselves to a specific task and join the Refugee.Community Design & Development Team.

[STRC — Website Trello Board](https://trello.com/b/yDgQXvDZ/strc-website)
