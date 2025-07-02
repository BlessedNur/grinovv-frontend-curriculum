import { JSTopicContent } from './jsBasic';

export const jsCompleteTopics: JSTopicContent[] = [
  {
    title: "JavaScript Arrays",
    theory: [
      "Arrays store multiple values in ordered list",
      "Zero-based indexing: first element at index 0",
      "Array methods: push, pop, shift, unshift, splice",
      "Iteration methods: forEach, map, filter, reduce"
    ],
    examples: [
      "const fruits = ['apple', 'banana', 'orange'];",
      "fruits.push('grape'); // Add to end",
      "const doubled = numbers.map(n => n * 2);",
      "const evens = numbers.filter(n => n % 2 === 0);"
    ],
    demo: "Interactive array manipulation examples",
    practice: [
      "Create and modify arrays",
      "Use array methods for data processing",
      "Build list management features"
    ],
    task: "Master array operations",
    assignment: "Build a task manager with add, remove, filter, and sort functionality using array methods"
  },
  {
    title: "JavaScript Objects",
    theory: [
      "Objects store key-value pairs",
      "Properties accessed with dot or bracket notation",
      "Methods are functions stored as object properties",
      "Object destructuring and spread operator"
    ],
    examples: [
      "const person = { name: 'John', age: 30, greet() { return 'Hello!'; } };",
      "console.log(person.name); // Dot notation",
      "const {name, age} = person; // Destructuring",
      "const newPerson = {...person, city: 'NYC'}; // Spread"
    ],
    demo: "Object manipulation and methods",
    practice: [
      "Create complex object structures",
      "Use object methods effectively",
      "Practice destructuring patterns"
    ],
    task: "Build object-oriented solutions",
    assignment: "Create a student management system using objects to store and manipulate student data with methods"
  }
];