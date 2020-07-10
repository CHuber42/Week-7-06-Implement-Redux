## Project: **Week 15 - Friday Code Review - TapRoom Keg Tracker**
#### Author: **Christopher Huber**
## Goal: Demonstrate single-page, fully-CRUD "website" in React!

### Github page: https://github.com/CHuber42/Week-6-29-Code-Review
#### Github repo: You're standing on it.
##### Copyright Christopher Huber, 2020

<hr/>
         
##### Build instructions/Installation: 

This project is built following the instructions at the bottom of the page.

To install, simply clone (or download) this folder into a new directory, git bash to the root folder,
and run npm install.  

To run: Navigate to the root folder in a terminal and enter "npm start". The project will be hosted at   
http://localhost:3000

##### Development Requirements

MVP:  As a user, I want to see a list/menu of all available kegs. For each keg, I want to see its name, brand, price and alcoholContent (or perhaps something like flavor for a kombucha store).
As a user, I want to submit a form to add a new keg to a list.
As a user, I want to be able to click on a keg to see its detail page.
As a user, I want to see how many pints are left in a keg. Hint: A full keg has roughly 124 pints.
As a user, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1. Pints should not be able to go below 0.

##### Extra Features/bugs:  
1. By default, when a keg is decremented, it is re-appended to the list of kegs which moves it to the end. This causes havoc with the display.  
To remedy this, the keg list now gets sorted based on a key assigned at Keg Object Creation; for some reason v4() doesn't work for this   
as sorting by string is a bit funky, so I used a placeholder - length of keg array - as a "key". This can cause problems when a keg is removed from the list  
(empty) and then another is added - a duplicate "key" is likely.

<hr/>

##### Segment 2: Redux Implementation

Here are the requirements for the refactor:

All state in your application should be handled by Redux (even if React can handle it locally).
All reducers should be tested thoroughly, and all tests must be passing.
Action creators and constants should be used.

##### Development Schedule

1. Document states that need to be handled by reducers:  
A) CurrentMenu: master list of all kegs in the taphouse. Object/Dictionary.  
B) addingBeverage: If the form is visible. Boolean.  
C) viewBeverageDetails: If beverage details page is visible and if so, the id of it (v4/string).

2. Declare reducers, bundle into a root reducer. (DONE)  
A) Declare const actiontypes folder; tests won't work otherwise.

##### _Contact_:

CHuber42.Gmail.com

##### _Copyright Christopher Huber 2020, all rights reserved._

<hr/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


# Developer's Notes
### Diagram for app/data flow:

 
 ![Dataflow Diagram](/taproom-diagram.jpg)


