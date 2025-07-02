export interface CSSTopic {
  id: string;
  title: string;
  content: string;
  codeExample?: string;
  practice?: string;
  assignment?: string;
  demo?: string;
}

export const cssNotes: CSSTopic[] = [
  // CSS BASIC
  {
    id: "css-introduction",
    title: "CSS Introduction",
    content:
      "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML documents. It controls layout, colors, fonts, spacing, and visual appearance of web pages.",
    codeExample: `/* External CSS file (styles.css) */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
}

h1 {
    color: #333;
    text-align: center;
    font-size: 2.5em;
}

p {
    line-height: 1.6;
    color: #666;
    margin-bottom: 15px;
}

/* Link CSS to HTML */
/* <link rel="stylesheet" href="styles.css"> */`,
    practice: "Create your first CSS file and link it to HTML",
    assignment:
      "Style a complete webpage with external CSS including colors, fonts, and layout",
    demo: "CSS vs no CSS comparison",
  },
  {
    id: "css-getting-started",
    title: "CSS Getting Started",
    content:
      "CSS can be applied in three ways: inline styles, internal stylesheets, and external stylesheets. External CSS is preferred for maintainability and reusability.",
    codeExample: `<!-- 1. Inline CSS -->
<h1 style="color: red; font-size: 24px;">Inline Styled Heading</h1>

<!-- 2. Internal CSS -->
<head>
    <style>
        h2 {
            color: blue;
            text-align: center;
        }
        .highlight {
            background-color: yellow;
        }
    </style>
</head>

<!-- 3. External CSS (Recommended) -->
<head>
    <link rel="stylesheet" href="styles.css">
</head>

/* External CSS file (styles.css) */
h3 {
    color: green;
    font-family: 'Times New Roman', serif;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}`,
    practice: "Implement all three methods of applying CSS",
    assignment: "Convert inline styles to external CSS file",
    demo: "CSS loading methods performance comparison",
  },
  {
    id: "css-syntax",
    title: "CSS Syntax",
    content:
      "CSS syntax consists of selectors and declaration blocks. Each declaration includes a property and value, separated by a colon and ended with a semicolon.",
    codeExample: `/* CSS Syntax Structure */
selector {
    property: value;
    property: value;
}

/* Examples */
h1 {
    color: blue;           /* Text color */
    font-size: 24px;       /* Font size */
    text-align: center;    /* Text alignment */
    margin-bottom: 20px;   /* Bottom margin */
}

/* Multiple selectors */
h1, h2, h3 {
    font-family: Arial, sans-serif;
    color: #333;
}

/* Comments in CSS */
/* This is a single-line comment */

/*
This is a
multi-line comment
*/

/* Property values can be: */
.examples {
    color: red;                    /* Color name */
    background-color: #ff0000;     /* Hex color */
    font-size: 16px;              /* Pixels */
    width: 50%;                   /* Percentage */
    margin: 10px 20px;            /* Multiple values */
}`,
    practice: "Write CSS rules with proper syntax",
    assignment: "Create a style guide showing different CSS syntax patterns",
    demo: "CSS syntax validator and formatter",
  },
  {
    id: "css-selectors",
    title: "CSS Selectors",
    content:
      "CSS selectors are patterns used to select HTML elements. They range from simple element selectors to complex pseudo-selectors and combinators.",
    codeExample: `/* Basic Selectors */
h1 { color: blue; }              /* Element selector */
.highlight { background: yellow; } /* Class selector */
#header { font-size: 32px; }     /* ID selector */
* { box-sizing: border-box; }    /* Universal selector */

/* Grouping selectors */
h1, h2, h3 { font-family: Arial; }

/* Descendant selectors */
div p { color: green; }          /* p inside div */
.container h2 { margin-top: 0; } /* h2 inside .container */

/* Child selector */
div > p { font-weight: bold; }   /* Direct p child of div */

/* Adjacent sibling */
h1 + p { font-size: 18px; }      /* p immediately after h1 */

/* General sibling */
h1 ~ p { color: gray; }          /* All p siblings after h1 */

/* Attribute selectors */
[type="text"] { border: 1px solid #ccc; }
[href^="https"] { color: green; }         /* Starts with */
[href$=".pdf"] { color: red; }            /* Ends with */
[class*="btn"] { padding: 10px; }         /* Contains */

/* Pseudo-classes */
a:hover { color: red; }
a:visited { color: purple; }
input:focus { outline: 2px solid blue; }
tr:nth-child(even) { background: #f2f2f2; }
p:first-child { margin-top: 0; }
p:last-child { margin-bottom: 0; }

/* Pseudo-elements */
p::first-letter { font-size: 2em; }
p::first-line { font-weight: bold; }
p::before { content: "→ "; }
p::after { content: " ←"; }`,
    practice: "Practice using different types of CSS selectors",
    assignment: "Create a navigation menu using various selector types",
    demo: "CSS selector specificity calculator",
  },
  {
    id: "css-color",
    title: "CSS Color",
    content:
      "CSS offers multiple ways to specify colors including named colors, hex codes, RGB, RGBA, HSL, and HSLA values for precise color control.",
    codeExample: `/* Named colors */
.red-text { color: red; }
.blue-bg { background-color: blue; }

/* Hex colors */
.hex-color { color: #ff0000; }        /* Red */
.hex-short { color: #f00; }           /* Short hex */
.hex-alpha { color: #ff000080; }      /* With transparency */

/* RGB colors */
.rgb-color { color: rgb(255, 0, 0); }           /* Red */
.rgba-color { color: rgba(255, 0, 0, 0.5); }    /* Semi-transparent red */

/* HSL colors */
.hsl-color { color: hsl(0, 100%, 50%); }        /* Red */
.hsla-color { color: hsla(0, 100%, 50%, 0.7); } /* Semi-transparent red */

/* Modern CSS colors */
.modern-colors {
    color: oklch(62.8% 0.25768 29.2338);        /* OKLCH */
    background: color(display-p3 1 0.5 0);       /* Display P3 */
}

/* Color functions */
.color-functions {
    background: linear-gradient(45deg, red, blue);
    border-color: color-mix(in srgb, red 50%, blue);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

/* Practical color schemes */
.primary { color: #007bff; }
.secondary { color: #6c757d; }
.success { color: #28a745; }
.danger { color: #dc3545; }
.warning { color: #ffc107; }
.info { color: #17a2b8; }`,
    practice: "Create a color palette using different color formats",
    assignment:
      "Design a website color scheme with accessibility considerations",
    demo: "Color picker and accessibility checker",
  },
  {
    id: "css-background",
    title: "CSS Background",
    content:
      "CSS background properties control background colors, images, positioning, repetition, and size. Multiple backgrounds can be layered for complex designs.",
    codeExample: `/* Background color */
.bg-color {
    background-color: #f0f0f0;
}

/* Background image */
.bg-image {
    background-image: url('background.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}

/* Background shorthand */
.bg-shorthand {
    background: #fff url('pattern.png') repeat-x top left;
}

/* Multiple backgrounds */
.multiple-backgrounds {
    background: 
        url('overlay.png') repeat,
        url('main-bg.jpg') no-repeat center / cover,
        linear-gradient(45deg, #ff0000, #0000ff);
}

/* Background properties */
.bg-properties {
    background-image: url('image.jpg');
    background-repeat: no-repeat;    /* repeat, repeat-x, repeat-y */
    background-position: top right;   /* keywords, %, px */
    background-size: contain;        /* cover, contain, 100% 50% */
    background-attachment: fixed;     /* scroll, fixed, local */
    background-origin: padding-box;   /* border-box, padding-box, content-box */
    background-clip: content-box;     /* border-box, padding-box, content-box */
}

/* Gradient backgrounds */
.gradients {
    /* Linear gradient */
    background: linear-gradient(to right, red, yellow);
    
    /* Radial gradient */
    background: radial-gradient(circle, red, yellow);
    
    /* Conic gradient */
    background: conic-gradient(red, yellow, green, blue, red);
    
    /* Complex gradient */
    background: linear-gradient(45deg, 
        rgba(255,0,0,0.8) 0%, 
        rgba(0,255,0,0.8) 50%, 
        rgba(0,0,255,0.8) 100%);
}`,
    practice: "Create various background effects and patterns",
    assignment: "Design a hero section with layered backgrounds and gradients",
    demo: "Background property interactive playground",
  },
  {
    id: "css-fonts",
    title: "CSS Fonts",
    content:
      "CSS font properties control text appearance including font family, size, weight, style, and spacing. Web fonts enable custom typography.",
    codeExample: `/* Font family */
.font-families {
    font-family: Arial, sans-serif;              /* System fonts */
    font-family: "Times New Roman", serif;       /* Quoted names */
    font-family: Georgia, "Times New Roman", serif; /* Font stack */
}

/* Web fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

.web-font {
    font-family: 'Roboto', sans-serif;
}

/* Font size */
.font-sizes {
    font-size: 16px;      /* Pixels */
    font-size: 1.2em;     /* Relative to parent */
    font-size: 1.5rem;    /* Relative to root */
    font-size: 120%;      /* Percentage */
    font-size: large;     /* Keywords: xx-small, x-small, small, medium, large, x-large, xx-large */
}

/* Font weight */
.font-weights {
    font-weight: normal;   /* 400 */
    font-weight: bold;     /* 700 */
    font-weight: 300;      /* Numeric values 100-900 */
    font-weight: lighter;  /* Relative to parent */
    font-weight: bolder;   /* Relative to parent */
}

/* Font style and variant */
.font-styles {
    font-style: normal;    /* normal, italic, oblique */
    font-variant: small-caps;
    text-transform: uppercase; /* lowercase, uppercase, capitalize */
}

/* Font shorthand */
.font-shorthand {
    font: italic bold 18px/1.5 "Helvetica Neue", Arial, sans-serif;
    /* font: [style] [variant] [weight] size/line-height family; */
}

/* Text spacing */
.text-spacing {
    letter-spacing: 2px;   /* Space between characters */
    word-spacing: 5px;     /* Space between words */
    line-height: 1.6;      /* Line height */
}

/* Font loading optimization */
@font-face {
    font-family: 'CustomFont';
    src: url('custom-font.woff2') format('woff2'),
         url('custom-font.woff') format('woff');
    font-display: swap;    /* Improve loading performance */
}`,
    practice: "Implement various font combinations and typography scales",
    assignment:
      "Create a typography system with different font weights and sizes",
    demo: "Font pairing and readability tester",
  },
  {
    id: "css-text",
    title: "CSS Text",
    content:
      "CSS text properties control text alignment, decoration, indentation, spacing, and transformation for enhanced readability and design.",
    codeExample: `/* Text alignment */
.text-alignment {
    text-align: left;      /* left, right, center, justify */
    text-align: center;
    text-align: justify;
    text-align-last: center; /* Last line alignment */
}

/* Text decoration */
.text-decoration {
    text-decoration: underline;           /* none, underline, overline, line-through */
    text-decoration: underline wavy red;  /* line style color */
    text-decoration-line: underline;
    text-decoration-style: dotted;        /* solid, double, dotted, dashed, wavy */
    text-decoration-color: blue;
    text-decoration-thickness: 2px;
}

/* Text transformation */
.text-transform {
    text-transform: uppercase;    /* none, capitalize, uppercase, lowercase */
    text-transform: capitalize;
    text-transform: lowercase;
}

/* Text indentation and spacing */
.text-spacing {
    text-indent: 2em;         /* First line indentation */
    letter-spacing: 1px;      /* Character spacing */
    word-spacing: 3px;        /* Word spacing */
    line-height: 1.8;         /* Line height */
    white-space: nowrap;      /* normal, nowrap, pre, pre-line, pre-wrap */
}

/* Text shadow */
.text-shadow {
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    text-shadow: 1px 1px 0px white, 2px 2px 4px black; /* Multiple shadows */
}

/* Text overflow */
.text-overflow {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;  /* clip, ellipsis */
    width: 200px;
}

/* Advanced text effects */
.text-effects {
    /* Gradient text */
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    
    /* Text stroke */
    -webkit-text-stroke: 1px black;
    
    /* Text selection styling */
}

.text-effects::selection {
    background: #ff9;
    color: #000;
}

/* Responsive text */
.responsive-text {
    font-size: clamp(1rem, 2.5vw, 2rem); /* min, preferred, max */
}`,
    practice: "Apply various text effects and formatting",
    assignment:
      "Create an article layout with proper typography and text styling",
    demo: "Text effects and readability showcase",
  },
  {
    id: "css-links",
    title: "CSS Links",
    content:
      "CSS link styling uses pseudo-classes to style different link states: normal, visited, hover, and active. Proper link styling improves user experience.",
    codeExample: `/* Basic link styling */
a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s ease;
}

/* Link states (in order: LVHA) */
a:link {
    color: blue;        /* Unvisited link */
}

a:visited {
    color: purple;      /* Visited link */
}

a:hover {
    color: red;         /* Mouse over link */
    text-decoration: underline;
}

a:active {
    color: orange;      /* Clicked link */
}

/* Button-style links */
.btn-link {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.3s ease;
}

.btn-link:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Navigation links */
.nav-link {
    display: block;
    padding: 15px 20px;
    color: #333;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    transition: border-color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
    border-bottom-color: #007bff;
    color: #007bff;
}

/* External link indicator */
a[href^="http"]:not([href*="yourdomain.com"]):after {
    content: " ↗";
    font-size: 0.8em;
}

/* Disabled links */
.disabled {
    color: #6c757d;
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.6;
}

/* Link animations */
.animated-link {
    position: relative;
    overflow: hidden;
}

.animated-link::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: #007bff;
    transition: left 0.3s ease;
}

.animated-link:hover::before {
    left: 0;
}`,
    practice: "Create different link styles for various use cases",
    assignment:
      "Design a navigation system with hover effects and active states",
    demo: "Link animation and interaction gallery",
  },
  {
    id: "css-lists",
    title: "CSS Lists",
    content:
      "CSS list properties control the appearance of ordered and unordered lists including markers, positioning, and custom styling.",
    codeExample: `/* List style type */
ul {
    list-style-type: disc;    /* disc, circle, square, none */
}

ol {
    list-style-type: decimal; /* decimal, lower-roman, upper-roman, lower-alpha, upper-alpha */
}

/* Custom list markers */
.custom-list {
    list-style-type: none;
    padding-left: 0;
}

.custom-list li::before {
    content: "→ ";
    color: #007bff;
    font-weight: bold;
}

/* List style position */
.list-inside {
    list-style-position: inside;  /* inside, outside */
}

/* List style image */
.image-bullets {
    list-style-image: url('bullet.png');
}

/* List shorthand */
.list-shorthand {
    list-style: square inside url('custom-bullet.png');
}

/* Styled navigation list */
.nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.nav-list li {
    margin-right: 20px;
}

.nav-list a {
    text-decoration: none;
    padding: 10px 15px;
    display: block;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.nav-list a:hover {
    background-color: #f8f9fa;
}

/* Nested lists */
.nested-list {
    list-style: none;
    padding-left: 20px;
}

.nested-list > li {
    position: relative;
    padding-left: 20px;
}

.nested-list > li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.5em;
    width: 10px;
    height: 1px;
    background: #333;
}

/* Ordered list counters */
.custom-counter {
    list-style: none;
    counter-reset: custom-counter;
    padding-left: 0;
}

.custom-counter li {
    counter-increment: custom-counter;
    padding-left: 40px;
    position: relative;
}

.custom-counter li::before {
    content: counter(custom-counter);
    position: absolute;
    left: 0;
    top: 0;
    background: #007bff;
    color: white;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

/* Horizontal list */
.horizontal-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.horizontal-list li {
    background: #e9ecef;
    padding: 5px 10px;
    border-radius: 3px;
}`,
    practice: "Style different types of lists with custom markers",
    assignment: "Create a complex navigation menu using styled lists",
    demo: "List styling techniques showcase",
  },
  {
    id: "css-tables",
    title: "CSS Tables",
    content:
      "CSS table properties control table layout, borders, spacing, and appearance. Modern CSS provides powerful tools for responsive table design.",
    codeExample: `/* Basic table styling */
table {
    width: 100%;
    border-collapse: collapse;    /* separate, collapse */
    border-spacing: 0;
    font-family: Arial, sans-serif;
}

th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

th {
    background-color: #f8f9fa;
    font-weight: bold;
    color: #333;
}

/* Striped table */
.striped tbody tr:nth-child(even) {
    background-color: #f8f9fa;
}

.striped tbody tr:hover {
    background-color: #e9ecef;
}

/* Bordered table */
.bordered {
    border: 1px solid #dee2e6;
}

.bordered th,
.bordered td {
    border: 1px solid #dee2e6;
}

/* Table with rounded corners */
.rounded {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Responsive table */
.table-responsive {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

.table-responsive table {
    min-width: 600px;
}

/* Table caption */
caption {
    caption-side: top;        /* top, bottom */
    padding: 10px;
    font-weight: bold;
    text-align: left;
}

/* Fixed table layout */
.fixed-layout {
    table-layout: fixed;      /* auto, fixed */
}

.fixed-layout col:nth-child(1) { width: 30%; }
.fixed-layout col:nth-child(2) { width: 50%; }
.fixed-layout col:nth-child(3) { width: 20%; }

/* Data table styling */
.data-table {
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 14px;
    min-width: 400px;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.data-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}

.data-table th,
.data-table td {
    padding: 12px 15px;
}

.data-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.data-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.data-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}

.data-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}

/* Mobile-friendly table */
@media screen and (max-width: 600px) {
    .mobile-table {
        border: 0;
    }
    
    .mobile-table caption {
        font-size: 1.3em;
    }
    
    .mobile-table thead {
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
    
    .mobile-table tr {
        border: 1px solid #ccc;
        display: block;
        margin-bottom: 10px;
        padding: 10px;
    }
    
    .mobile-table td {
        border: none;
        display: block;
        font-size: 13px;
        text-align: right;
        padding-left: 50%;
        position: relative;
    }
    
    .mobile-table td:before {
        content: attr(data-label);
        float: left;
        font-weight: bold;
        text-transform: uppercase;
        position: absolute;
        left: 10px;
        width: 45%;
        text-align: left;
    }
}`,
    practice: "Create responsive and accessible table layouts",
    assignment:
      "Design a data dashboard with styled tables and sorting indicators",
    demo: "Table styling and responsiveness examples",
  },
  // CSS BOX MODEL
  {
    id: "css-box-model",
    title: "CSS Box Model",
    content:
      "The CSS box model describes how elements are rendered as rectangular boxes with content, padding, border, and margin areas. Understanding the box model is crucial for layout control.",
    codeExample: `/* Box model components */
.box {
    width: 200px;           /* Content width */
    height: 100px;          /* Content height */
    padding: 20px;          /* Space inside border */
    border: 5px solid blue; /* Border around padding */
    margin: 10px;           /* Space outside border */
}

/* Box sizing */
.content-box {
    box-sizing: content-box; /* Default: width/height = content only */
    width: 200px;            /* Total width = 200px + padding + border */
}

.border-box {
    box-sizing: border-box;  /* width/height includes padding + border */
    width: 200px;            /* Total width = 200px (including padding + border) */
}

/* Global border-box (recommended) */
*, *::before, *::after {
    box-sizing: border-box;
}

/* Box model calculations */
.calculation-example {
    width: 300px;           /* Content width */
    padding: 20px;          /* 20px on all sides */
    border: 5px solid red;  /* 5px border all around */
    margin: 10px;           /* 10px margin all around */
    
    /* Total space taken:
       Width: 300px + 40px (padding) + 10px (border) = 350px
       With margin: 350px + 20px (margin) = 370px total space */
}

/* Box model debugging */
.debug {
    outline: 1px solid red;    /* Doesn't affect layout */
    background-color: rgba(255, 0, 0, 0.1);
}

/* Practical examples */
.card {
    box-sizing: border-box;
    width: 300px;
    padding: 20px;
    border: 1px solid #ddd;
    margin: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`,
    practice:
      "Experiment with different box-sizing values and observe layout changes",
    assignment:
      "Create a responsive card grid using proper box model understanding",
    demo: "Interactive box model visualization tool",
  },
  {
    id: "css-dimension",
    title: "CSS Dimension",
    content:
      "CSS dimension properties control the width and height of elements. Includes minimum and maximum constraints for responsive design.",
    codeExample: `/* Basic dimensions */
.dimensions {
    width: 300px;           /* Fixed width */
    height: 200px;          /* Fixed height */
    
    /* Responsive dimensions */
    width: 50%;             /* Percentage of parent */
    width: 50vw;            /* 50% of viewport width */
    height: 50vh;           /* 50% of viewport height */
    
    /* Minimum and maximum */
    min-width: 200px;       /* Minimum width */
    max-width: 800px;       /* Maximum width */
    min-height: 100px;      /* Minimum height */
    max-height: 400px;      /* Maximum height */
}

/* Auto dimensions */
.auto-dimensions {
    width: auto;            /* Default: content width */
    height: auto;           /* Default: content height */
}

/* Responsive containers */
.responsive-container {
    width: 100%;
    max-width: 1200px;      /* Prevent too wide on large screens */
    min-width: 320px;       /* Prevent too narrow on small screens */
    margin: 0 auto;         /* Center the container */
}

/* Aspect ratio */
.aspect-ratio {
    width: 100%;
    aspect-ratio: 16 / 9;   /* Modern way to maintain aspect ratio */
    background: #f0f0f0;
}

/* Legacy aspect ratio technique */
.aspect-ratio-legacy {
    width: 100%;
    position: relative;
}

.aspect-ratio-legacy::before {
    content: '';
    display: block;
    padding-top: 56.25%;    /* 9/16 = 0.5625 = 56.25% for 16:9 ratio */
}

.aspect-ratio-legacy > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/* Intrinsic dimensions */
.intrinsic-dimensions {
    width: fit-content;     /* Width based on content */
    width: max-content;     /* Maximum content width */
    width: min-content;     /* Minimum content width */
}

/* Modern responsive units */
.modern-units {
    width: clamp(200px, 50%, 600px);    /* min, preferred, max */
    height: clamp(100px, 25vh, 300px);
    
    /* Container query units (when supported) */
    width: 50cqw;           /* 50% of container width */
    height: 25cqh;          /* 25% of container height */
}`,
    practice: "Create responsive layouts using various dimension units",
    assignment: "Build a photo gallery with images that maintain aspect ratios",
    demo: "CSS units and responsive dimension playground",
  },
  {
    id: "css-padding",
    title: "CSS Padding",
    content:
      "Padding creates space inside an element between the content and border. It's part of the clickable area and inherits background color.",
    codeExample: `/* Padding values */
.padding-examples {
    /* Single value - all sides */
    padding: 20px;
    
    /* Two values - vertical | horizontal */
    padding: 10px 20px;     /* 10px top/bottom, 20px left/right */
    
    /* Three values - top | horizontal | bottom */
    padding: 10px 20px 15px;
    
    /* Four values - top | right | bottom | left (clockwise) */
    padding: 10px 20px 15px 5px;
}

/* Individual padding properties */
.individual-padding {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 15px;
    padding-left: 5px;
}

/* Responsive padding */
.responsive-padding {
    padding: 1rem;          /* Relative to root font-size */
    padding: 5%;            /* Percentage of parent width */
    padding: 2vw;           /* Viewport width units */
    
    /* Responsive scaling */
    padding: clamp(10px, 3vw, 40px);
}

/* Practical examples */
.button {
    padding: 12px 24px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.card-content {
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.navigation {
    padding: 0;             /* Remove default padding */
}

.nav-item {
    padding: 15px 20px;
    border-bottom: 1px solid #eee;
}

/* Padding with background effects */
.padded-background {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    padding: 40px;
    color: white;
    text-align: center;
}

/* Negative values not allowed */
/* padding: -10px;  This would be invalid */

/* Logical padding properties */
.logical-padding {
    padding-inline-start: 20px;    /* Left in LTR, right in RTL */
    padding-inline-end: 20px;      /* Right in LTR, left in RTL */
    padding-block-start: 10px;     /* Top */
    padding-block-end: 10px;       /* Bottom */
}`,
    practice: "Create various UI components focusing on proper padding usage",
    assignment:
      "Design a dashboard with consistent padding throughout all components",
    demo: "Padding impact on layout and user experience",
  },
  {
    id: "css-border",
    title: "CSS Border",
    content:
      "CSS borders create visible boundaries around elements. Borders can have different styles, colors, widths, and even radius for rounded corners.",
    codeExample: `/* Border shorthand */
.border-shorthand {
    border: 2px solid blue;         /* width style color */
    border: medium dashed red;      /* width style color */
}

/* Individual border properties */
.individual-borders {
    border-width: 1px;              /* thin, medium, thick, or px/em */
    border-style: solid;            /* none, solid, dashed, dotted, double, groove, ridge, inset, outset */
    border-color: #333;             /* any color value */
}

/* Side-specific borders */
.side-borders {
    border-top: 2px solid red;
    border-right: 3px dashed blue;
    border-bottom: 1px dotted green;
    border-left: 4px double purple;
}

/* Border radius */
.rounded-borders {
    border: 2px solid #007bff;
    border-radius: 10px;            /* All corners */
    
    /* Individual corners */
    border-top-left-radius: 10px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 20px;
    
    /* Shorthand for corners */
    border-radius: 10px 5px 15px 20px;  /* top-left, top-right, bottom-right, bottom-left */
    border-radius: 10px 5px;             /* top-left & bottom-right, top-right & bottom-left */
}

/* Border images */
.border-image {
    border: 20px solid transparent;
    border-image: url('border-image.png') 20 repeat;
    border-image: linear-gradient(45deg, red, blue) 1;
}

/* Creative border effects */
.creative-borders {
    /* Gradient border */
    background: linear-gradient(white, white) padding-box,
                linear-gradient(45deg, red, blue) border-box;
    border: 3px solid transparent;
    border-radius: 10px;
}

.card-with-border {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    transition: border-color 0.3s ease;
}

.card-with-border:hover {
    border-color: #007bff;
    box-shadow: 0 2px 10px rgba(0, 123, 255, 0.1);
}

/* Border on focus */
.input-field {
    border: 2px solid #ddd;
    border-radius: 4px;
    padding: 10px;
    transition: border-color 0.3s ease;
}

.input-field:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

/* Remove borders */
.no-border {
    border: none;               /* Remove all borders */
    border: 0;                  /* Alternative way */
}

/* Responsive borders */
@media (max-width: 768px) {
    .responsive-border {
        border-width: 1px;      /* Thinner border on mobile */
        border-radius: 4px;     /* Less radius on mobile */
    }
}`,
    practice:
      "Create various border styles and effects for different UI elements",
    assignment: "Design a card-based layout with creative border treatments",
    demo: "Border animation and hover effects showcase",
  },
  {
    id: "css-margin",
    title: "CSS Margin",
    content:
      "Margins create space outside an element, separating it from other elements. Margins can collapse and don't have background color.",
    codeExample: `/* Margin values */
.margin-examples {
    /* Single value - all sides */
    margin: 20px;
    
    /* Two values - vertical | horizontal */
    margin: 10px 20px;          /* 10px top/bottom, 20px left/right */
    
    /* Three values - top | horizontal | bottom */
    margin: 10px 20px 15px;
    
    /* Four values - top | right | bottom | left */
    margin: 10px 20px 15px 5px;
}

/* Individual margin properties */
.individual-margins {
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 15px;
    margin-left: 5px;
}

/* Auto margins for centering */
.centered-element {
    width: 300px;
    margin: 0 auto;             /* Center horizontally */
    margin-left: auto;
    margin-right: auto;         /* Alternative way */
}

/* Negative margins */
.negative-margins {
    margin-top: -10px;          /* Pull element up */
    margin-left: -20px;         /* Pull element left */
}

/* Margin collapse */
.margin-collapse-demo {
    margin-bottom: 20px;
}

.margin-collapse-demo + .margin-collapse-demo {
    margin-top: 30px;           /* Only 30px gap, not 50px (20+30) */
}

/* Preventing margin collapse */
.prevent-collapse {
    overflow: hidden;           /* Creates new block formatting context */
    /* or */
    padding-top: 1px;           /* Any padding/border prevents collapse */
    /* or */
    display: flex;              /* Flex containers don't have margin collapse */
}

/* Responsive margins */
.responsive-margins {
    margin: 1rem;               /* Relative to root font-size */
    margin: 5%;                 /* Percentage of parent width */
    margin: 2vw;                /* Viewport width units */
    
    /* Responsive scaling */
    margin: clamp(10px, 3vw, 40px);
}

/* Common patterns */
.card-spacing {
    margin-bottom: 20px;        /* Space between cards */
}

.section-spacing {
    margin: 40px 0;             /* Space above and below sections */
}

.container {
    max-width: 1200px;
    margin: 0 auto;             /* Center container */
    padding: 0 20px;            /* Side padding for mobile */
}

/* Margin utilities */
.m-0 { margin: 0; }
.m-1 { margin: 8px; }
.m-2 { margin: 16px; }
.m-3 { margin: 24px; }
.m-4 { margin: 32px; }

.mt-0 { margin-top: 0; }
.mr-0 { margin-right: 0; }
.mb-0 { margin-bottom: 0; }
.ml-0 { margin-left: 0; }

.mx-auto { margin-left: auto; margin-right: auto; }
.my-0 { margin-top: 0; margin-bottom: 0; }

/* Logical margin properties */
.logical-margins {
    margin-inline-start: 20px;  /* Left in LTR, right in RTL */
    margin-inline-end: 20px;    /* Right in LTR, left in RTL */
    margin-block-start: 10px;   /* Top */
    margin-block-end: 10px;     /* Bottom */
}

/* Common layout patterns */
.sidebar-layout {
    display: flex;
    gap: 20px;                  /* Modern alternative to margins */
}

.sidebar {
    width: 250px;
    margin-right: 20px;         /* Traditional margin approach */
}

.content {
    flex: 1;
}`,
    practice: "Practice margin collapse and centering techniques",
    assignment:
      "Create a responsive layout using margins for spacing and alignment",
    demo: "Margin collapse visualization and debugging tools",
  },
];
