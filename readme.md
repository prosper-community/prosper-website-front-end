# Prosper Landing Page
This is a public repository for the prosper landing page. The front-end of the website is made from the [Generator Gulp Webapp](https://github.com/yeoman/generator-gulp-webapp). If you want to learn more about the website's scaffold, read the Gulp Webapp documentation first.

## Getting Started
### Requirements

- Git (>2.2.2)
- Node JS (>=0.12.0)
- NPM (>=3.3.3)
- Gulp (^3.9.0)
- Terminal / iTerm (CLI)

### General Instructions

#### 1. Fork this repository

#### 2. Clone your forked repository:

`git clone [add-your-forked-repository-SSH-url-here]`

#### 3. Change directories into 'solve-the-refugee-crisis':

`cd solve-the-refugee-crisis`

#### 4. Then, install all the node modules (this may take a while):

`sudo npm install`

#### 5. Install all the bower components (this may take a while):

`bower install`

#### 6. Run the gulp 'serve' task:

`gulp serve`

At that point you should see the site running on your local machine.

### Windows-Specific Instructions

#### 1. Open up Git Shell and clone the repository as shown above.

#### 2. Install [Node JS for Windows](nodejs.org). Restart the computer after installation.

#### 3. Update Node.js to the latest version:
'npm install npm -g'

#### 4. Install bower:
'npm install -g bower'.

#### 5. Change directories into 'solve-the-refugee-crisis' and follow steps 3-5 in the previous section.

#### Reference: [Setting Up Bower and Gulp in Windows](https://ruleoftech.com/2015/setting-up-bower-and-gulp-in-windows)

### Vagrant-Specific Instructions

On a Vagrant VM, the Linux procedure described above will not work. Instead, try following the steps described in this [blog post](http://www.sureshjoshi.com/development/installing-nodejs-vagrant-windows) or this [blog post](http://jmfeurprier.com/2015/10/02/how-to-install-node-js-with-ubuntu-and-vagrant-in-a-synced-folder).

---

## Making Contributions
Anyone who wants to make changes to the prosper website may fork this repository and open a pull request. Please provide detailed commit logs that describe the changes you propose, along with a concise description of your pull requests.

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

[prosper — Website Trello Board](https://trello.com/b/yDgQXvDZ/prosper-website)
