import { TypeScriptTopic } from './typeScriptNotes';

export const typeScriptComplete: TypeScriptTopic[] = [
  {
    id: 'ts-special-types',
    title: 'TypeScript Special Types',
    content: 'TypeScript includes special types like any, unknown, never, and void that handle specific scenarios in type checking.',
    codeExample: `// Special Types
let value: any = 42;
value = "hello";
value = true;

// Unknown type (safer than any)
let userInput: unknown;
let userName: string;

if (typeof userInput === "string") {
  userName = userInput;
}

// Void type (no return value)
function logMessage(message: string): void {
  console.log(message);
}

// Never type (never returns)
function throwError(message: string): never {
  throw new Error(message);
}`,
    practice: 'Use special types in different scenarios',
    assignment: 'Create functions using void and never types',
    demo: 'Special types usage examples'
  },
  {
    id: 'ts-arrays',
    title: 'TypeScript Arrays',
    content: 'Arrays in TypeScript can be typed to contain specific types of elements, providing type safety for array operations.',
    codeExample: `// Array Types
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
let flags: boolean[] = [true, false, true];

// Generic array syntax
let scores: Array<number> = [85, 92, 78];
let cities: Array<string> = ["NYC", "LA", "Chicago"];

// Mixed type arrays (union types)
let mixed: (string | number)[] = ["hello", 42, "world", 100];

// Array methods with type safety
numbers.push(6); // OK
numbers.push("7"); // Error: string not assignable to number`,
    practice: 'Create typed arrays and use array methods',
    assignment: 'Build a shopping cart with typed arrays',
    demo: 'Array type safety demonstration'
  },
  {
    id: 'ts-tuples',
    title: 'TypeScript Tuples',
    content: 'Tuples are arrays with fixed number of elements where each element can have a different type.',
    codeExample: `// Tuple Types
let person: [string, number] = ["John", 30];
let coordinate: [number, number] = [10, 20];

// Accessing tuple elements
console.log(person[0]); // "John" (string)
console.log(person[1]); // 30 (number)

// Tuple with optional elements
let point: [number, number, number?] = [1, 2];
point = [1, 2, 3]; // Also valid

// Named tuples
let employee: [name: string, age: number, salary: number] = 
  ["Alice", 25, 50000];

// Destructuring tuples
let [name, age] = person;`,
    practice: 'Create and manipulate tuples',
    assignment: 'Design a coordinate system using tuples',
    demo: 'Tuple usage in real scenarios'
  },
  {
    id: 'ts-object-types',
    title: 'TypeScript Object Types',
    content: 'Object types define the shape of objects, specifying which properties they should have and their types.',
    codeExample: `// Object Type
let user: { name: string; age: number; email: string } = {
  name: "John",
  age: 30,
  email: "john@example.com"
};

// Optional properties
let product: { name: string; price: number; description?: string } = {
  name: "Laptop",
  price: 999
};

// Index signatures
let scores: { [subject: string]: number } = {
  math: 95,
  science: 87,
  english: 92
};

// Nested objects
let company: {
  name: string;
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
} = {
  name: "Tech Corp",
  address: {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001"
  }
};`,
    practice: 'Define object types for different entities',
    assignment: 'Create a library management system with object types',
    demo: 'Object type validation examples'
  }
];