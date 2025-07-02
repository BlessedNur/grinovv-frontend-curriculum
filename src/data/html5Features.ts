import { TopicContent } from './htmlNotes';

export const html5FeatureTopics: TopicContent[] = [
  {
    title: "HTML5 New Input Types",
    theory: [
      "HTML5 introduces new input types for better user experience",
      "Built-in validation without JavaScript",
      "Mobile-friendly input keyboards",
      "Better accessibility and semantics"
    ],
    examples: [
      "<input type='email' placeholder='Enter email'>",
      "<input type='date' min='2024-01-01'>",
      "<input type='range' min='0' max='100' value='50'>",
      "<input type='color' value='#ff0000'>"
    ],
    demo: "Interactive form with all HTML5 input types",
    practice: [
      "Create contact form with email, tel, url inputs",
      "Build date picker for event booking",
      "Add range slider for price filter"
    ],
    task: "Implement modern form with HTML5 inputs",
    assignment: "Create comprehensive registration form using 10+ HTML5 input types with proper validation"
  },
  {
    title: "HTML5 Canvas",
    theory: [
      "Canvas element for drawing graphics via JavaScript",
      "2D and 3D graphics support",
      "Dynamic, scriptable rendering of shapes and images",
      "Used for games, data visualization, image editing"
    ],
    examples: [
      "<canvas id='myCanvas' width='400' height='200'></canvas>",
      "const ctx = canvas.getContext('2d');\nctx.fillStyle = 'red';\nctx.fillRect(10, 10, 100, 100);"
    ],
    demo: "Draw shapes and animations on canvas",
    practice: [
      "Draw basic shapes (rectangle, circle, line)",
      "Create simple animation",
      "Build interactive drawing app"
    ],
    task: "Create canvas-based graphics",
    assignment: "Build interactive game using HTML5 Canvas (e.g., Pong, Snake, or drawing application)"
  },
  {
    title: "HTML5 Web Storage",
    theory: [
      "Client-side storage: localStorage and sessionStorage",
      "Stores data as key-value pairs",
      "localStorage persists until manually cleared",
      "sessionStorage cleared when tab closes"
    ],
    examples: [
      "localStorage.setItem('username', 'john');",
      "const user = localStorage.getItem('username');",
      "sessionStorage.setItem('temp', 'data');",
      "localStorage.removeItem('username');"
    ],
    demo: "Save and retrieve user preferences",
    practice: [
      "Save form data to localStorage",
      "Create user settings panel",
      "Build shopping cart with persistence"
    ],
    task: "Implement data persistence",
    assignment: "Create note-taking app that saves notes to localStorage with categories and search functionality"
  }
];