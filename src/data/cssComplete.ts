import { CSSTopicContent } from './cssBasic';

export const cssCompleteTopics: CSSTopicContent[] = [
  {
    title: "CSS Responsive Design",
    theory: [
      "Mobile-first approach for modern web development",
      "Media queries for different screen sizes",
      "Flexible units: %, em, rem, vw, vh",
      "Responsive images and typography"
    ],
    examples: [
      "@media (max-width: 768px) { .container { width: 100%; } }",
      "img { max-width: 100%; height: auto; }",
      "font-size: clamp(1rem, 2.5vw, 2rem); /* Responsive typography */"
    ],
    demo: "Fully responsive website layout",
    practice: [
      "Create mobile-first designs",
      "Test on different screen sizes",
      "Optimize for touch interfaces"
    ],
    task: "Master responsive design principles",
    assignment: "Build responsive e-commerce product page that works perfectly on mobile, tablet, and desktop"
  },
  {
    title: "CSS Positioning",
    theory: [
      "Position property: static, relative, absolute, fixed, sticky",
      "Z-index for layering elements",
      "Creating layouts with positioning",
      "Common positioning patterns and pitfalls"
    ],
    examples: [
      ".relative { position: relative; top: 10px; left: 20px; }",
      ".absolute { position: absolute; top: 0; right: 0; }",
      ".fixed { position: fixed; bottom: 20px; right: 20px; }",
      ".sticky { position: sticky; top: 0; }"
    ],
    demo: "Interactive positioning examples",
    practice: [
      "Create sticky navigation headers",
      "Build modal overlays",
      "Design floating action buttons"
    ],
    task: "Master CSS positioning techniques",
    assignment: "Create a dashboard layout with fixed sidebar, sticky header, and positioned widgets"
  },
  {
    title: "CSS Pseudo-classes and Pseudo-elements",
    theory: [
      "Pseudo-classes target element states (:hover, :focus, :nth-child)",
      "Pseudo-elements create virtual elements (::before, ::after)",
      "Enhanced interactivity without JavaScript",
      "Advanced selectors for complex styling"
    ],
    examples: [
      "button:hover { background-color: blue; }",
      "input:focus { border-color: green; }",
      "li:nth-child(odd) { background: #f0f0f0; }",
      ".tooltip::after { content: attr(data-tooltip); }"
    ],
    demo: "Interactive UI components with pseudo-classes",
    practice: [
      "Create hover effects and transitions",
      "Build custom tooltips with pseudo-elements",
      "Style form states and validation"
    ],
    task: "Enhance UX with pseudo-selectors",
    assignment: "Create an interactive pricing table with hover effects, tooltips, and state indicators using only CSS"
  }
];