import { TopicContent } from './htmlNotes';

export const htmlCompleteTopics: TopicContent[] = [
  {
    title: "HTML Elements",
    theory: [
      "HTML elements are building blocks of web pages",
      "Elements are defined by start tag, content, and end tag",
      "Empty elements have no content (br, hr, img)",
      "Block vs inline elements have different display behavior"
    ],
    examples: [
      "<p>This is a paragraph element</p>",
      "<div>Block element</div>",
      "<span>Inline element</span>",
      "<br> <!-- Empty element -->"
    ],
    demo: "Different element types and their behavior",
    practice: [
      "Create nested element structures",
      "Use block and inline elements appropriately",
      "Practice with empty elements"
    ],
    task: "Master HTML element hierarchy",
    assignment: "Build a complete article page using proper element nesting and semantic structure"
  },
  {
    title: "HTML Attributes",
    theory: [
      "Attributes provide additional information about elements",
      "Written as name='value' pairs in opening tags",
      "Global attributes work on all elements (id, class, style)",
      "Element-specific attributes (src for img, href for a)"
    ],
    examples: [
      "<img src='photo.jpg' alt='Description' width='300'>",
      "<a href='https://example.com' target='_blank'>Link</a>",
      "<div id='header' class='container main'>Content</div>"
    ],
    demo: "Interactive attribute examples",
    practice: [
      "Add attributes to enhance elements",
      "Use global attributes consistently",
      "Implement accessibility attributes"
    ],
    task: "Apply attributes effectively",
    assignment: "Create image gallery with proper attributes for accessibility and functionality"
  },
  {
    title: "HTML Forms",
    theory: [
      "Forms collect user input for processing",
      "Form element contains input controls",
      "Input types: text, email, password, submit, etc.",
      "Form validation with HTML5 attributes"
    ],
    examples: [
      "<form action='/submit' method='post'>\n  <input type='email' required>\n  <button type='submit'>Send</button>\n</form>",
      "<select name='country'>\n  <option value='us'>USA</option>\n</select>"
    ],
    demo: "Complete contact form with validation",
    practice: [
      "Build various form controls",
      "Add client-side validation",
      "Style forms with CSS"
    ],
    task: "Create professional forms",
    assignment: "Build multi-step registration form with validation and user experience enhancements"
  },
  {
    title: "HTML Tables",
    theory: [
      "Tables display data in rows and columns",
      "Structure: table, thead, tbody, tfoot, tr, th, td",
      "Semantic markup improves accessibility",
      "Responsive table techniques"
    ],
    examples: [
      "<table>\n  <thead>\n    <tr><th>Name</th><th>Age</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>John</td><td>25</td></tr>\n  </tbody>\n</table>"
    ],
    demo: "Data table with sorting and filtering",
    practice: [
      "Create structured data tables",
      "Add table headers and captions",
      "Make tables responsive"
    ],
    task: "Build accessible data tables",
    assignment: "Create employee directory table with search, sort, and responsive design features"
  }
];