import { ReactTopic } from './reactNotes';

export const reactComplete: ReactTopic[] = [
  {
    id: 'react-home',
    title: 'React Home',
    content: 'Welcome to React - A JavaScript library for building user interfaces. React lets you compose complex UIs from small and isolated pieces of code called components.',
    codeExample: `// Your first React app
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>Welcome to React!</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));`,
    practice: 'Set up your first React application',
    assignment: 'Create a welcome page with React',
    demo: 'Basic React app structure'
  },
  {
    id: 'react-get-started',
    title: 'React Get Started',
    content: 'To get started with React, you need Node.js installed. Create React App is the best way to start building a new single-page application in React.',
    codeExample: `// Create a new React app
npx create-react-app my-app
cd my-app
npm start

// Project structure
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
  src/
    App.js
    index.js`,
    practice: 'Set up a React development environment',
    assignment: 'Create and run your first React project',
    demo: 'React project setup walkthrough'
  },
  {
    id: 'react-es6',
    title: 'React ES6',
    content: 'React uses ES6 features extensively. Understanding arrow functions, destructuring, modules, and classes is essential for React development.',
    codeExample: `// Arrow Functions
const greet = (name) => {
  return \`Hello, \${name}!\`;
};

// Destructuring
const {name, age} = props;

// Modules
import React from 'react';
export default MyComponent;

// Classes
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
}`,
    practice: 'Practice ES6 syntax used in React',
    assignment: 'Refactor class components using ES6 features',
    demo: 'ES6 features in React components'
  },
  {
    id: 'react-render-html',
    title: 'React Render HTML',
    content: 'React renders JSX to the DOM. The ReactDOM.render() method takes two arguments: the JSX element and the DOM element where it should be rendered.',
    codeExample: `// Rendering JSX
import ReactDOM from 'react-dom';

const element = <h1>Hello, React!</h1>;
ReactDOM.render(element, document.getElementById('root'));

// Rendering components
function Welcome() {
  return <h1>Welcome to React!</h1>;
}

ReactDOM.render(<Welcome />, document.getElementById('root'));`,
    practice: 'Render different JSX elements to the DOM',
    assignment: 'Create a multi-component page and render it',
    demo: 'DOM rendering examples'
  }
];