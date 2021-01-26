**SSR for React App**

This is a project to create a server side render for React application. This project has 3 main navigation parts:

1. Users

2. Admins

3. Login

Code Structure:

The server folder is where we put all the files

**Installation**

Use package.json and then run `npm install`

**Usage**

Use `dev:build:server": "webpack --config webpack.server.js --watch` for building the bundle.js file and watch whenever changes are made
Use `dev:server": "nodemon --watch build --exec \"node build/bundle.js\"` for re-running our server whenever build is changed
Use `dev:build:client": "webpack --config webpack.client.js --watch` for runing client side -- go to the exact same div and render ex. event handler etc. using ReactDOM.hyrant()

Use the `node build/bundle.js` for **viewing** the website at your localhost port 3002
