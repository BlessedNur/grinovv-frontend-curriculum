export interface TypeScriptTopic {
  id: string;
  title: string;
  content: string;
  codeExample?: string;
  practice?: string;
  assignment?: string;
  demo?: string;
}

export const typeScriptNotes: TypeScriptTopic[] = [
  {
    id: 'ts-introduction',
    title: 'TypeScript Introduction',
    content: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds static type definitions to JavaScript.',
    codeExample: `// JavaScript
function greet(name) {
  return "Hello, " + name;
}

// TypeScript
function greet(name: string): string {
  return "Hello, " + name;
}

// Type checking catches errors
greet(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'`,
    practice: 'Convert JavaScript functions to TypeScript with type annotations',
    assignment: 'Create a calculator function with proper TypeScript types',
    demo: 'Type safety benefits demonstration'
  },
  {
    id: 'ts-get-started',
    title: 'TypeScript Get Started',
    content: 'To get started with TypeScript, you need to install it globally or locally in your project. TypeScript files use .ts extension and compile to JavaScript.',
    codeExample: `// Install TypeScript
npm install -g typescript

// Create a TypeScript file (hello.ts)
function sayHello(name: string) {
  console.log(\`Hello, \${name}!\`);
}

sayHello("World");

// Compile TypeScript to JavaScript
tsc hello.ts

// Run the compiled JavaScript
node hello.js`,
    practice: 'Set up TypeScript development environment',
    assignment: 'Create and compile your first TypeScript program',
    demo: 'TypeScript compilation process'
  },
  {
    id: 'ts-simple-types',
    title: 'TypeScript Simple Types',
    content: 'TypeScript has several basic types including string, number, boolean, array, and more. These types help catch errors during development.',
    codeExample: `// Basic Types
let name: string = "John";
let age: number = 30;
let isStudent: boolean = true;
let hobbies: string[] = ["reading", "coding"];
let scores: number[] = [85, 92, 78];

// Type inference
let city = "New York"; // TypeScript infers string type
let count = 10; // TypeScript infers number type

// Any type (avoid when possible)
let data: any = "hello";
data = 42;
data = true;`,
    practice: 'Practice declaring variables with different types',
    assignment: 'Create a student profile with appropriate types',
    demo: 'Type checking and inference examples'
  }
];