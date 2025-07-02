export interface ReactTopic {
  id: string;
  title: string;
  content: string;
  codeExample?: string;
  practice?: string;
  assignment?: string;
  demo?: string;
}

export const reactNotes: ReactTopic[] = [
  {
    id: 'react-intro',
    title: 'React Introduction',
    content: 'React is a JavaScript library for building user interfaces. It was created by Facebook and is maintained by Facebook and the community. React makes it painless to create interactive UIs.',
    codeExample: `// Simple React Component
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Using the component
<Welcome name="Sara" />`,
    practice: 'Create a simple React component that displays your name',
    assignment: 'Build a greeting component that accepts a name prop and displays a personalized message',
    demo: 'Interactive greeting card component'
  },
  {
    id: 'react-jsx',
    title: 'React JSX',
    content: 'JSX is a syntax extension for JavaScript. It allows you to write HTML-like code in your JavaScript files. JSX makes React code more readable and easier to write.',
    codeExample: `// JSX Example
const element = (
  <div>
    <h1>Hello, world!</h1>
    <p>This is JSX</p>
  </div>
);

// JSX with expressions
const name = 'John';
const greeting = <h1>Hello, {name}!</h1>;`,
    practice: 'Write JSX elements with embedded JavaScript expressions',
    assignment: 'Create a profile card using JSX with dynamic data',
    demo: 'Dynamic profile card with JSX'
  },
  {
    id: 'react-components',
    title: 'React Components',
    content: 'Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces.',
    codeExample: `// Function Component
function Button(props) {
  return (
    <button onClick={props.onClick}>
      {props.children}
    </button>
  );
}

// Class Component
class Counter extends React.Component {
  render() {
    return <div>Count: {this.props.count}</div>;
  }
}`,
    practice: 'Create both function and class components',
    assignment: 'Build a reusable card component with props',
    demo: 'Interactive component showcase'
  }
];