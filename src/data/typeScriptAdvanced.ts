import { TypeScriptTopic } from './typeScriptNotes';

export const typeScriptAdvanced: TypeScriptTopic[] = [
  {
    id: 'ts-enums',
    title: 'TypeScript Enums',
    content: 'Enums allow you to define a set of named constants. They make it easier to document intent and create distinct cases.',
    codeExample: `// Numeric Enums
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

// String Enums
enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue"
}

// Usage
let dir: Direction = Direction.Up;
let color: Color = Color.Red;

function move(direction: Direction) {
  console.log(\`Moving \${Direction[direction]}\`);
}`,
    practice: 'Create enums for different use cases',
    assignment: 'Build a status system using enums',
    demo: 'Enum usage in real applications'
  },
  {
    id: 'ts-interfaces',
    title: 'TypeScript Interfaces',
    content: 'Interfaces define contracts for objects, classes, and functions. They specify what properties and methods an object should have.',
    codeExample: `// Basic Interface
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // Optional property
}

// Interface with methods
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

// Extending interfaces
interface Admin extends User {
  permissions: string[];
  lastLogin: Date;
}

// Implementation
const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com"
};

class BasicCalculator implements Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
  subtract(a: number, b: number): number {
    return a - b;
  }
}`,
    practice: 'Define interfaces for different data structures',
    assignment: 'Create a complete user management system with interfaces',
    demo: 'Interface-driven development'
  },
  {
    id: 'ts-generics',
    title: 'TypeScript Generics',
    content: 'Generics provide a way to create reusable components that work with multiple types while maintaining type safety.',
    codeExample: `// Generic function
function identity<T>(arg: T): T {
  return arg;
}

// Usage
let output1 = identity<string>("hello");
let output2 = identity<number>(42);

// Generic interface
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Generic class
class DataStore<T> {
  private data: T[] = [];
  
  add(item: T): void {
    this.data.push(item);
  }
  
  get(index: number): T | undefined {
    return this.data[index];
  }
  
  getAll(): T[] {
    return [...this.data];
  }
}

// Usage
const stringStore = new DataStore<string>();
stringStore.add("hello");

const numberStore = new DataStore<number>();
numberStore.add(42);`,
    practice: 'Create generic functions and classes',
    assignment: 'Build a generic data repository with CRUD operations',
    demo: 'Type-safe generic programming'
  }
];