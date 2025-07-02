import { CSSTopicContent } from './cssBasic';

export const cssAdvancedTopics: CSSTopicContent[] = [
  {
    title: "CSS Flexbox",
    theory: [
      "Flexible Box Layout for one-dimensional layouts",
      "Main axis and cross axis concepts",
      "Flex container (display: flex) and flex items",
      "Properties: justify-content, align-items, flex-direction"
    ],
    examples: [
      ".container { display: flex; justify-content: center; align-items: center; }",
      ".item { flex: 1; } /* Grow to fill space */",
      ".container { flex-direction: column; gap: 20px; }"
    ],
    demo: "Build responsive navigation and card layouts",
    practice: [
      "Create centered content layouts",
      "Build responsive navigation bars",
      "Design flexible card grids"
    ],
    task: "Master flexbox for modern layouts",
    assignment: "Create complete responsive website layout using only Flexbox for header, navigation, content, and footer"
  },
  {
    title: "CSS Grid",
    theory: [
      "Two-dimensional layout system",
      "Grid container and grid items",
      "Grid lines, tracks, cells, and areas",
      "Explicit and implicit grids"
    ],
    examples: [
      ".grid { display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 20px; }",
      ".item { grid-column: 1 / 3; grid-row: 2; }",
      ".grid { grid-template-areas: 'header header' 'sidebar content'; }"
    ],
    demo: "Complex layouts with CSS Grid",
    practice: [
      "Create magazine-style layouts",
      "Build responsive image galleries",
      "Design dashboard interfaces"
    ],
    task: "Build complex layouts with Grid",
    assignment: "Design and implement a complete magazine homepage layout using CSS Grid with multiple content areas"
  },
  {
    title: "CSS Animations",
    theory: [
      "CSS transitions for smooth property changes",
      "Keyframe animations for complex sequences",
      "Animation properties: duration, timing-function, delay",
      "Transform property for 2D and 3D effects"
    ],
    examples: [
      ".button { transition: all 0.3s ease; }",
      "@keyframes slideIn { from { transform: translateX(-100%); } to { transform: translateX(0); } }",
      ".animate { animation: slideIn 1s ease-out; }"
    ],
    demo: "Interactive animations and micro-interactions",
    practice: [
      "Add hover effects to buttons",
      "Create loading animations",
      "Build sliding menus and modals"
    ],
    task: "Enhance UX with smooth animations",
    assignment: "Create an interactive portfolio website with smooth page transitions, hover effects, and loading animations"
  }
];