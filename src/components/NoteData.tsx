export interface NoteContent {
  theory: string[];
  examples: string[];
  tasks: string[];
  assignment: string;
  resources: string[];
}

export interface NotePageData {
  title: string;
  week: string;
  topics: string[];
  content: NoteContent;
}

export const frontendNotes: NotePageData[] = [
  {
    title: "HTML Fundamentals",
    week: "Week 1-2",
    topics: ["HTML5 Structure", "Semantic Elements", "Forms & Validation", "Accessibility"],
    content: {
      theory: [
        "HTML5 introduces semantic elements like <header>, <nav>, <main>, <section>",
        "Document structure: DOCTYPE, html, head, body elements",
        "Form elements: input types, validation attributes, labels",
        "Accessibility: ARIA attributes, alt text, semantic markup"
      ],
      examples: [
        "<header><h1>Welcome</h1></header>",
        "<form><input type='email' required></form>",
        "<img src='logo.png' alt='Company Logo'>",
        "<nav><ul><li><a href='#'>Home</a></li></ul></nav>"
      ],
      tasks: [
        "Create a personal portfolio HTML structure",
        "Build a contact form with validation",
        "Design a blog layout using semantic elements",
        "Implement accessibility features in existing HTML"
      ],
      assignment: "Build a complete restaurant website homepage using HTML5 semantic elements, including navigation, hero section, menu preview, and contact form with proper validation and accessibility.",
      resources: [
        "MDN HTML Documentation",
        "W3C HTML5 Specification",
        "WebAIM Accessibility Guidelines",
        "HTML5 Validator Tool"
      ]
    }
  },
  {
    title: "CSS Mastery",
    week: "Week 3-4",
    topics: ["CSS3 Features", "Flexbox & Grid", "Responsive Design", "Animations"],
    content: {
      theory: [
        "CSS3 features: border-radius, box-shadow, gradients, transforms",
        "Flexbox: flex container and items, justify-content, align-items",
        "CSS Grid: grid-template-columns, grid-template-rows, grid-area",
        "Responsive design: media queries, mobile-first approach"
      ],
      examples: [
        ".container { display: flex; justify-content: center; }",
        ".grid { display: grid; grid-template-columns: 1fr 2fr; }",
        "@media (max-width: 768px) { .mobile { display: block; } }",
        ".animate { transition: all 0.3s ease; }"
      ],
      tasks: [
        "Create a responsive navigation bar using Flexbox",
        "Build a photo gallery using CSS Grid",
        "Design mobile-first responsive layout",
        "Add hover animations and transitions"
      ],
      assignment: "Style the restaurant website from Week 1-2 assignment. Make it fully responsive with mobile-first approach, use Flexbox for navigation, CSS Grid for menu layout, and add smooth animations.",
      resources: [
        "CSS-Tricks Flexbox Guide",
        "CSS Grid Garden Game",
        "Can I Use Browser Support",
        "Responsive Design Patterns"
      ]
    }
  },
  {
    title: "JavaScript Core",
    week: "Week 5-6",
    topics: ["ES6+ Features", "DOM Manipulation", "Async Programming", "APIs"],
    content: {
      theory: [
        "ES6+ features: arrow functions, destructuring, template literals, modules",
        "DOM manipulation: querySelector, addEventListener, createElement",
        "Async programming: Promises, async/await, fetch API",
        "Working with APIs: REST, JSON, error handling"
      ],
      examples: [
        "const getData = async () => await fetch('/api/data')",
        "const [name, age] = ['John', 25]",
        "document.querySelector('.btn').addEventListener('click', handleClick)",
        "const template = `Hello ${name}, you are ${age} years old`"
      ],
      tasks: [
        "Build an interactive to-do list with local storage",
        "Create a weather app using a public API",
        "Implement form validation with JavaScript",
        "Build a simple calculator with event handling"
      ],
      assignment: "Create a movie search application that fetches data from OMDB API, displays results in a grid, allows filtering by genre, and saves favorites to localStorage with smooth animations.",
      resources: [
        "JavaScript.info Tutorial",
        "MDN JavaScript Reference",
        "JSONPlaceholder API",
        "Async/Await Guide"
      ]
    }
  },
  {
    title: "React Development",
    week: "Week 7-8",
    topics: ["Components & JSX", "Hooks & State", "Routing", "Context API"],
    content: {
      theory: [
        "React components: functional components, JSX syntax, props",
        "React Hooks: useState, useEffect, useContext, custom hooks",
        "React Router: BrowserRouter, Route, Link, navigation",
        "State management: Context API, useReducer, prop drilling"
      ],
      examples: [
        "const [count, setCount] = useState(0)",
        "useEffect(() => { fetchData() }, [])",
        "<Route path='/about' component={About} />",
        "const theme = useContext(ThemeContext)"
      ],
      tasks: [
        "Build a counter app with useState",
        "Create a blog with React Router",
        "Implement a shopping cart with Context",
        "Build a custom hook for API calls"
      ],
      assignment: "Develop a complete e-commerce product catalog with React Router for navigation, Context API for cart management, custom hooks for data fetching, and responsive design with modern UI components.",
      resources: [
        "React Official Documentation",
        "React Router Guide",
        "React Hooks Patterns",
        "Create React App"
      ]
    }
  },
  {
    title: "TypeScript Fundamentals",
    week: "Week 9-10",
    topics: ["Type System", "Interfaces & Types", "Generics", "Advanced Types"],
    content: {
      theory: [
        "TypeScript type system: static typing, type inference, type checking",
        "Interfaces and type aliases: defining object shapes and contracts",
        "Generic types: reusable components with type parameters",
        "Advanced types: union types, intersection types, conditional types"
      ],
      examples: [
        "interface User { name: string; age: number; }",
        "function identity<T>(arg: T): T { return arg; }",
        "type Status = 'loading' | 'success' | 'error'",
        "const user: User = { name: 'John', age: 30 }"
      ],
      tasks: [
        "Convert JavaScript project to TypeScript",
        "Create type-safe API client",
        "Build reusable generic components",
        "Implement complex type definitions"
      ],
      assignment: "Refactor the React e-commerce project to use TypeScript with proper interfaces for products, cart items, and API responses. Add generic hooks and type-safe state management.",
      resources: [
        "TypeScript Handbook",
        "TypeScript Deep Dive",
        "React TypeScript Cheatsheet",
        "TypeScript Playground"
      ]
    }
  }
];