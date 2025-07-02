export interface JSTopic {
  id: string;
  title: string;
  content: string;
  codeExample?: string;
  practice?: string;
  assignment?: string;
  demo?: string;
}

export const jsNotes: JSTopic[] = [
  // JAVASCRIPT BASIC
  {
    id: "js-introduction",
    title: "JavaScript Introduction",
    content:
      "JavaScript is a versatile, high-level programming language that enables interactive web pages. It's an essential part of web applications alongside HTML and CSS, running in browsers and servers.",
    codeExample: `// JavaScript can be written in different places

// 1. Inline JavaScript
<button onclick="alert('Hello World!')">Click me</button>

// 2. Internal JavaScript
<script>
    console.log("Hello from internal script!");
    document.getElementById("demo").innerHTML = "JavaScript is working!";
</script>

// 3. External JavaScript file (script.js)
console.log("Hello from external file!");

function greetUser() {
    const name = prompt("What's your name?");
    alert("Hello, " + name + "!");
}

// Modern JavaScript features
const greeting = (name) => \`Hello, \${name}!\`;
console.log(greeting("World"));

// JavaScript can manipulate:
// - HTML content
// - CSS styles  
// - Handle events
// - Validate forms
// - Create animations
// - Make API calls`,
    practice: "Add JavaScript to HTML pages using all three methods",
    assignment:
      "Create an interactive webpage that changes content and styles using JavaScript",
    demo: "JavaScript capabilities showcase",
  },
  {
    id: "js-getting-started",
    title: "JavaScript Getting Started",
    content:
      "To start with JavaScript, you need a text editor and a web browser. JavaScript can be embedded in HTML or written in separate .js files.",
    codeExample: `<!DOCTYPE html>
<html>
<head>
    <title>Getting Started with JavaScript</title>
</head>
<body>
    <h1 id="title">Welcome</h1>
    <button id="changeBtn">Change Title</button>
    <p id="output"></p>

    <script>
        // Getting started with JavaScript
        console.log("JavaScript is running!");
        
        // Variables
        let message = "Hello, JavaScript!";
        const pi = 3.14159;
        var oldStyleVar = "Still works but let/const preferred";
        
        // Functions
        function changeTitle() {
            document.getElementById("title").innerHTML = "Title Changed!";
            document.getElementById("output").innerHTML = "Function executed at " + new Date();
        }
        
        // Event handling
        document.getElementById("changeBtn").onclick = changeTitle;
        
        // Alternative event handling
        document.getElementById("changeBtn").addEventListener('click', function() {
            console.log("Button clicked!");
        });
        
        // Basic DOM manipulation
        document.body.style.backgroundColor = "#f0f0f0";
        
        // Conditional logic
        const hour = new Date().getHours();
        if (hour < 12) {
            console.log("Good morning!");
        } else if (hour < 18) {
            console.log("Good afternoon!");
        } else {
            console.log("Good evening!");
        }
        
        // Loops
        for (let i = 1; i <= 5; i++) {
            console.log("Count: " + i);
        }
    </script>
</body>
</html>`,
    practice:
      "Set up a development environment and run your first JavaScript program",
    assignment:
      "Create a simple calculator using JavaScript that performs basic operations",
    demo: "JavaScript development workflow demonstration",
  },
  {
    id: "js-syntax",
    title: "JavaScript Syntax",
    content:
      "JavaScript syntax defines the rules for writing JavaScript code. It includes statements, variables, operators, functions, and control structures.",
    codeExample: `// JavaScript Syntax Rules

// 1. Case Sensitivity
let myVariable = "JavaScript is case-sensitive";
let MyVariable = "This is different from myVariable";

// 2. Statements end with semicolons (optional but recommended)
let a = 5;
let b = 10;
let sum = a + b;

// 3. Code blocks use curly braces
if (sum > 10) {
    console.log("Sum is greater than 10");
}

// 4. Comments
// Single line comment
/* 
   Multi-line comment
   Can span multiple lines
*/

// 5. Variables naming rules
let validName = "Good";           // Valid
let _privateName = "Valid";       // Valid
let $dollarName = "Valid";        // Valid
let camelCaseNaming = "Preferred"; // Valid and preferred
// let 123invalid = "Bad";        // Invalid - can't start with number
// let my-name = "Bad";           // Invalid - hyphens not allowed

// 6. String literals
let singleQuotes = 'Hello World';
let doubleQuotes = "Hello World";
let templateLiterals = \`Hello \${name}\`;  // Template literals with interpolation

// 7. Numbers
let integer = 42;
let float = 3.14159;
let scientific = 2.5e6;           // 2.5 * 10^6
let binary = 0b1010;              // Binary literal
let octal = 0o755;                // Octal literal
let hexadecimal = 0xFF;           // Hexadecimal literal

// 8. Booleans
let isTrue = true;
let isFalse = false;

// 9. Arrays
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "text", true, null];

// 10. Objects
let person = {
    name: "John",
    age: 30,
    isStudent: false
};

// 11. Functions
function regularFunction(param1, param2) {
    return param1 + param2;
}

// Arrow function (ES6+)
const arrowFunction = (param1, param2) => param1 + param2;

// 12. Control structures
if (condition) {
    // if block
} else if (anotherCondition) {
    // else if block
} else {
    // else block
}

for (let i = 0; i < 10; i++) {
    // for loop
}

while (condition) {
    // while loop
}

// 13. Operators
let arithmetic = a + b - c * d / e;
let comparison = a > b && c < d || e == f;
let assignment = a += b;          // Equivalent to a = a + b`,
    practice: "Write JavaScript code following proper syntax rules",
    assignment: "Create a program demonstrating all major syntax elements",
    demo: "JavaScript syntax checker and formatter",
  },
  {
    id: "js-variables",
    title: "JavaScript Variables",
    content:
      "Variables store data values. JavaScript has three ways to declare variables: var, let, and const. Each has different scope and behavior rules.",
    codeExample: `// Variable Declarations

// 1. let - block scoped, can be reassigned
let userName = "John";
userName = "Jane";               // Reassignment allowed

// 2. const - block scoped, cannot be reassigned
const PI = 3.14159;
const userEmail = "john@example.com";
// userEmail = "new@email.com";  // Error: Cannot reassign const

// 3. var - function scoped (older way, avoid when possible)
var oldStyleVar = "Function scoped";

// Scope examples
function scopeExample() {
    if (true) {
        var varVariable = "Function scoped";
        let letVariable = "Block scoped";
        const constVariable = "Block scoped";
    }
    
    console.log(varVariable);     // Accessible
    // console.log(letVariable);  // Error: not accessible outside block
    // console.log(constVariable); // Error: not accessible outside block
}

// Variable types
let stringVar = "Hello World";    // String
let numberVar = 42;               // Number
let booleanVar = true;            // Boolean
let arrayVar = [1, 2, 3];         // Array (object)
let objectVar = {name: "John"};   // Object
let nullVar = null;               // Null
let undefinedVar;                 // Undefined
let symbolVar = Symbol("id");     // Symbol (ES6)
let bigIntVar = 123456789012345678901234567890n; // BigInt

// Variable naming conventions
let firstName = "John";           // camelCase (preferred)
let last_name = "Doe";            // snake_case (less common in JS)
let CONSTANT_VALUE = 100;         // UPPER_CASE for constants

// Hoisting behavior
console.log(hoistedVar);          // undefined (not error)
var hoistedVar = "I'm hoisted";

// console.log(notHoisted);       // Error: Cannot access before initialization
let notHoisted = "Not hoisted";

// Global vs Local variables
let globalVar = "I'm global";

function variableScope() {
    let localVar = "I'm local";
    
    function innerFunction() {
        let innerVar = "I'm inner";
        console.log(globalVar);   // Accessible
        console.log(localVar);    // Accessible
        console.log(innerVar);    // Accessible
    }
    
    // console.log(innerVar);     // Error: not accessible
}

// Object and Array variables (const behavior)
const user = {name: "John", age: 30};
user.age = 31;                    // Allowed: modifying properties
user.city = "New York";           // Allowed: adding properties
// user = {};                     // Error: Cannot reassign

const numbers = [1, 2, 3];
numbers.push(4);                  // Allowed: modifying array
numbers[0] = 10;                  // Allowed: changing elements
// numbers = [];                  // Error: Cannot reassign

// Template literals with variables
const name = "Alice";
const age = 25;
const message = \`Hello, my name is \${name} and I'm \${age} years old.\`;

// Destructuring assignment
const person = {firstName: "John", lastName: "Doe", age: 30};
const {firstName, lastName} = person;     // Object destructuring

const colors = ["red", "green", "blue"];
const [primary, secondary] = colors;      // Array destructuring`,
    practice: "Practice variable declarations and understand scope differences",
    assignment:
      "Create a program that demonstrates all variable types and scoping rules",
    demo: "Variable scope and hoisting visualization",
  },
  {
    id: "js-generating-output",
    title: "JavaScript Generating Output",
    content:
      "JavaScript can generate output in various ways: writing to HTML elements, browser console, alert boxes, and directly to the document.",
    codeExample: `// Different ways to generate output in JavaScript

// 1. Writing to HTML elements
document.getElementById("output").innerHTML = "Hello World!";
document.getElementById("output").textContent = "Plain text only";

// 2. Console output (for debugging)
console.log("Simple log message");
console.error("Error message");
console.warn("Warning message");
console.info("Info message");
console.table([{name: "John", age: 30}, {name: "Jane", age: 25}]);

// 3. Alert boxes
alert("This is an alert box");
let userConfirmed = confirm("Do you want to continue?");
let userInput = prompt("What's your name?", "Enter name here");

// 4. Writing directly to document
document.write("This writes directly to the document");
// Note: document.write() should generally be avoided in modern JavaScript

// 5. Creating and appending elements
function createOutput() {
    // Create new element
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Dynamically created paragraph";
    newParagraph.style.color = "blue";
    
    // Append to body or specific element
    document.body.appendChild(newParagraph);
    
    // Alternative: append to specific element
    const container = document.getElementById("container");
    container.appendChild(newParagraph);
}

// 6. Modifying element attributes and styles
function modifyElements() {
    const element = document.getElementById("myElement");
    
    // Change text content
    element.textContent = "New content";
    
    // Change HTML content
    element.innerHTML = "<strong>Bold content</strong>";
    
    // Change attributes
    element.setAttribute("class", "highlight");
    element.setAttribute("data-info", "some data");
    
    // Change styles
    element.style.color = "red";
    element.style.fontSize = "18px";
    element.style.backgroundColor = "#f0f0f0";
}

// 7. Form output
function updateForm() {
    document.getElementById("inputField").value = "New value";
    document.getElementById("checkbox").checked = true;
    document.getElementById("selectBox").selectedIndex = 2;
}

// 8. Dynamic list creation
function createDynamicList() {
    const items = ["Apple", "Banana", "Cherry", "Date"];
    const list = document.createElement("ul");
    
    items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
    });
    
    document.body.appendChild(list);
}

// 9. Template literals for complex output
function generateComplexOutput(user) {
    const outputHTML = \`
        <div class="user-card">
            <h3>\${user.name}</h3>
            <p>Age: \${user.age}</p>
            <p>Email: \${user.email}</p>
            <p>Member since: \${new Date().getFullYear()}</p>
        </div>
    \`;
    
    document.getElementById("userContainer").innerHTML = outputHTML;
}

// 10. Error handling in output
function safeOutput(elementId, content) {
    try {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = content;
        } else {
            console.error(\`Element with ID '\${elementId}' not found\`);
        }
    } catch (error) {
        console.error("Error updating element:", error);
    }
}

// 11. Formatted output
function formatOutput() {
    const number = 1234.5678;
    const date = new Date();
    const currency = 29.99;
    
    // Number formatting
    console.log("Formatted number:", number.toFixed(2));
    console.log("Percentage:", (0.85 * 100).toFixed(1) + "%");
    
    // Date formatting
    console.log("Date:", date.toLocaleDateString());
    console.log("Time:", date.toLocaleTimeString());
    
    // Currency formatting
    console.log("Price:", new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(currency));
}

// Example usage
generateComplexOutput({
    name: "John Doe",
    age: 30,
    email: "john@example.com"
});`,
    practice: "Create output using different JavaScript methods",
    assignment:
      "Build a dynamic content generator that displays user information in multiple formats",
    demo: "Interactive output methods demonstration",
  },
  {
    id: "js-data-types",
    title: "JavaScript Data Types",
    content:
      "JavaScript has dynamic typing with primitive and non-primitive data types. Understanding data types is crucial for effective programming.",
    codeExample: `// JavaScript Data Types

// PRIMITIVE DATA TYPES (stored by value)

// 1. Number - integers and floating-point numbers
let integer = 42;
let float = 3.14159;
let negative = -25;
let infinity = Infinity;
let notANumber = NaN;

console.log(typeof integer);      // "number"
console.log(Number.isInteger(42)); // true
console.log(Number.isNaN(NaN));   // true

// 2. String - text data
let singleQuotes = 'Hello World';
let doubleQuotes = "Hello World";
let templateLiteral = \`Hello \${name}\`;
let multilineString = \`
    This is a
    multiline string
\`;

console.log(typeof singleQuotes); // "string"
console.log("Hello".length);      // 5

// 3. Boolean - true or false
let isTrue = true;
let isFalse = false;
let booleanFromComparison = 5 > 3; // true

console.log(typeof isTrue);       // "boolean"

// 4. Undefined - variable declared but not assigned
let undefinedVar;
let explicitUndefined = undefined;

console.log(typeof undefinedVar); // "undefined"

// 5. Null - intentional absence of value
let nullVar = null;

console.log(typeof nullVar);      // "object" (this is a known quirk)
console.log(nullVar === null);    // true

// 6. Symbol - unique identifier (ES6+)
let symbol1 = Symbol();
let symbol2 = Symbol("description");
let symbol3 = Symbol("description");

console.log(typeof symbol1);      // "symbol"
console.log(symbol2 === symbol3); // false (symbols are always unique)

// 7. BigInt - for large integers (ES2020+)
let bigNumber = 123456789012345678901234567890n;
let anotherBigInt = BigInt("123456789012345678901234567890");

console.log(typeof bigNumber);    // "bigint"

// NON-PRIMITIVE DATA TYPES (stored by reference)

// 1. Object - collection of key-value pairs
let person = {
    name: "John",
    age: 30,
    isStudent: false,
    address: {
        street: "123 Main St",
        city: "New York"
    }
};

console.log(typeof person);       // "object"

// 2. Array - ordered list of values
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "text", true, null, {name: "John"}];
let emptyArray = [];

console.log(typeof numbers);      // "object"
console.log(Array.isArray(numbers)); // true

// 3. Function - reusable block of code
function regularFunction() {
    return "Hello";
}

const arrowFunction = () => "Hello";

console.log(typeof regularFunction); // "function"

// 4. Date - for working with dates and times
let now = new Date();
let specificDate = new Date("2023-12-25");

console.log(typeof now);          // "object"
console.log(now instanceof Date); // true

// 5. RegExp - regular expressions
let pattern = /[a-z]+/g;
let regexObject = new RegExp("[a-z]+", "g");

console.log(typeof pattern);      // "object"
console.log(pattern instanceof RegExp); // true

// TYPE CHECKING AND CONVERSION

// Checking types
function checkType(value) {
    console.log(\`Value: \${value}, Type: \${typeof value}\`);
    
    // More specific type checking
    if (Array.isArray(value)) {
        console.log("It's an array");
    } else if (value instanceof Date) {
        console.log("It's a date");
    } else if (value === null) {
        console.log("It's null");
    }
}

// Type conversion (explicit)
let num = Number("123");          // 123
let str = String(123);            // "123"
let bool = Boolean(1);            // true

// Type coercion (implicit)
let result = "5" + 3;             // "53" (string concatenation)
let result2 = "5" - 3;            // 2 (numeric subtraction)
let result3 = "5" * "3";          // 15 (numeric multiplication)

// Truthy and Falsy values
// Falsy: false, 0, -0, 0n, "", null, undefined, NaN
// Everything else is truthy

function checkTruthiness(value) {
    if (value) {
        console.log(\`\${value} is truthy\`);
    } else {
        console.log(\`\${value} is falsy\`);
    }
}

// Examples
checkTruthiness(0);               // falsy
checkTruthiness("");              // falsy
checkTruthiness("hello");         // truthy
checkTruthiness([]);              // truthy (empty array)
checkTruthiness({});              // truthy (empty object)

// Strict equality vs loose equality
console.log(5 == "5");            // true (loose equality, type coercion)
console.log(5 === "5");           // false (strict equality, no coercion)
console.log(null == undefined);   // true
console.log(null === undefined);  // false`,
    practice: "Work with different data types and understand type conversion",
    assignment:
      "Create a data type analyzer that identifies and converts between different types",
    demo: "JavaScript type system explorer",
  },
];
