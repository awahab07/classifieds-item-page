This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This example project was created to test the new Redux Toolkit and its support for TypeScript. Also, Material UI's hooks are used to demonstrate the eas they offer when customizing and consuming a material UI theme. 

The project is an implementation of an example VIP (View Item Page). VIP is a page to list full details and description of an item sold on online stores like Amazon and eBay.

The app is built with Mobile-First approach and adapts well on a wider screen for tablet and desktop.

The app is built using React 16 with Material UI as the primary UI framework. 
React 16's hooks are utilized for declarative and independent components with clean code and no wrapper hell effect on DOM.

Application's styling is kep as imperative as possible (with almost no custom css) with the help of Material UI's built-in styled-components and CSS in JS support.
All the custom styles are applied in a way that they are derived directly from the app theme.  

## Available Scripts

In the project directory, you can run:

### `yarn install`

Installs all project npm dependencies.<br />
Make sure you have **NodeJS** (version >9.x.x), **npm** and **yarn** installed on your machine.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

(Note that only a few tests and mocks are implemented for demonstration purposes.)

### `yarn build`

Builds the app for production to the `build` folder.<br />

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn e2e`

To run e2e tests, use the `e2e` command. (Work is In-Progress, and e2e might require docker to run_).
