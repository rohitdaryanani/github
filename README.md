# Github Repo Search

check the live version [here](http://rohit-github.surge.sh/)

### Tech stack

- **React** -  frontend/view library
- **Redux** -  state management library

### Setup and Run

- `$ git clone https://github.com/rohitdaryanani/exercise.git && cd github ` will download the app and cd to the folder once done.

- `npm install` - to install dependencies.

- `npm run start` - to start the project


### Questions

- packages/libraries used.
  - [axios](https://github.com/mzabriskie/axios) - to handle ajax request
  - [bootstrap](https://v4-alpha.getbootstrap.com/) - for quick css styles and ui
  - [react](https://facebook.github.io/react/) - awesome view library
  - [redux](http://redux.js.org/) - state management library
  - [react-redux](https://github.com/reactjs/react-redux) - to use react with redux
  - [redux-promise](https://www.npmjs.com/package/redux-promise) - middleware to handle promises
  - [create-react-app](https://github.com/facebookincubator/create-react-app) - react project generator by facebook this handles the initial file struture and zero configuration
  - [surge](https://surge.sh/) - for deploying frontend apps

- test cases for this app
  - as a user, I should be able to search for GitHub repositories
    - it should display a list of repositories with the owner/name format
  - as a user, I should be able to select a specific repository
    - it should display additional display when clicked
      - language'
      - 'followers'
      - 'url'
      - 'description

- file structure 

  - Top Level
  ```
  ├── README.md
  ├── build
  ├── node_modules
  ├── package.json
  ├── public
  │   ├── favicon.ico
  │   ├── index.html
  │   └── manifest.json
  └── src
      ├── actions
      ├── components
      ├── containers
      ├── index.css
      ├── index.js
      ├── logo.svg
      ├── reducers
      └── registerServiceWorker.js
  ```
  - build - is the transpiled and minified source for the project and is used for deployment
  - src - is where are code is and is divided into 4 folders
    - containers - parent element of the component and where interaction with the state and actions occurs. I'm using feature folder style each feature has its own folder with the js and CSS file
    - components - are dumb and mostly used for rendering data
    - actions - where the interaction of our ui with the state
    - reducers - our source of truth/state

 - prepare the app for production
  - create-react-app comes with a built in script to build, this handles our transpiling and minifying our code into a single js and CSS file. All we have to do is upload the build folder.
  For this project, I'm using surge for deployment.

   **Note** - The app uses index.js as the entry point instead of app.js. create-react-app doesn't allow this to be changed and causes errors on the react script.