import { ReactTopic } from './reactNotes';

export const reactHooks: ReactTopic[] = [
  {
    id: 'what-is-hook',
    title: 'What is a Hook?',
    content: 'Hooks are functions that let you use state and other React features in functional components. They allow you to reuse stateful logic between components.',
    codeExample: `// Rules of Hooks
// 1. Only call Hooks at the top level
// 2. Only call Hooks from React functions

import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`,
    practice: 'Convert class components to functional components with hooks',
    assignment: 'Create a counter component using useState hook',
    demo: 'Interactive hook examples'
  },
  {
    id: 'use-state',
    title: 'useState Hook',
    content: 'useState is a Hook that lets you add state to functional components. It returns an array with the current state value and a function to update it.',
    codeExample: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <p>Hello, {name}!</p>
    </div>
  );
}`,
    practice: 'Create components with multiple state variables',
    assignment: 'Build a form with useState for input handling',
    demo: 'State management with useState'
  },
  {
    id: 'use-effect',
    title: 'useEffect Hook',
    content: 'useEffect Hook lets you perform side effects in functional components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount.',
    codeExample: `import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return <div>Seconds: {seconds}</div>;
}

// Effect with dependency
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);
  
  return user ? <div>{user.name}</div> : <div>Loading...</div>;
}`,
    practice: 'Use useEffect for API calls and cleanup',
    assignment: 'Create a data fetching component with useEffect',
    demo: 'Side effects and cleanup with useEffect'
  }
];