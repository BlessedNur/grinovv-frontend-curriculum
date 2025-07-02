import { JSTopicContent } from './jsBasic';

export const jsAdvancedTopics: JSTopicContent[] = [
  {
    title: "JavaScript DOM Manipulation",
    theory: [
      "DOM (Document Object Model) represents HTML as objects",
      "Select elements: getElementById, querySelector, querySelectorAll",
      "Modify content: innerHTML, textContent, setAttribute",
      "Event handling: addEventListener, event objects"
    ],
    examples: [
      "const element = document.querySelector('.my-class');",
      "element.innerHTML = '<strong>New content</strong>';",
      "button.addEventListener('click', () => alert('Clicked!'));",
      "document.createElement('div'); parent.appendChild(newElement);"
    ],
    demo: "Interactive todo list with DOM manipulation",
    practice: [
      "Select and modify HTML elements",
      "Add click events to buttons",
      "Create dynamic content with JavaScript"
    ],
    task: "Build interactive web components",
    assignment: "Create a dynamic photo gallery with filtering, modal view, and favorite functionality using DOM manipulation"
  },
  {
    title: "JavaScript Async Programming",
    theory: [
      "Asynchronous programming with Promises",
      "async/await syntax for cleaner code",
      "Fetch API for HTTP requests",
      "Error handling with try/catch"
    ],
    examples: [
      "const response = await fetch('https://api.example.com/data');",
      "const data = await response.json();",
      "try { const result = await apiCall(); } catch (error) { console.error(error); }",
      "Promise.all([fetch(url1), fetch(url2)]).then(responses => {});"
    ],
    demo: "Weather app fetching real API data",
    practice: [
      "Fetch data from public APIs",
      "Handle loading states and errors",
      "Chain multiple API calls"
    ],
    task: "Master asynchronous JavaScript patterns",
    assignment: "Build a news aggregator that fetches from multiple APIs, handles errors gracefully, and displays loading states"
  },
  {
    title: "JavaScript ES6+ Features",
    theory: [
      "Arrow functions and lexical this binding",
      "Template literals for string interpolation",
      "Destructuring assignment for arrays and objects",
      "Modules: import/export for code organization"
    ],
    examples: [
      "const greet = name => `Hello ${name}!`; // Arrow function + template literal",
      "const [first, second] = [1, 2]; // Array destructuring",
      "const {name, age} = person; // Object destructuring",
      "import { helper } from './utils.js'; export default MyClass;"
    ],
    demo: "Modern JavaScript application structure",
    practice: [
      "Refactor old JavaScript to ES6+ syntax",
      "Create modular code with imports/exports",
      "Use destructuring in function parameters"
    ],
    task: "Modernize JavaScript codebase",
    assignment: "Refactor a legacy JavaScript project to use ES6+ features: modules, classes, arrow functions, and async/await"
  }
];