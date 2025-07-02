import { TopicContent } from './htmlNotes';

export const htmlAdvancedTopics: TopicContent[] = [
  {
    title: "HTML Doctypes",
    theory: [
      "DOCTYPE declaration defines the document type and HTML version",
      "HTML5 DOCTYPE: <!DOCTYPE html>",
      "Must be the first line in HTML document",
      "Helps browsers render the page correctly"
    ],
    examples: [
      "<!DOCTYPE html> <!-- HTML5 -->",
      "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\"> <!-- HTML 4.01 -->"
    ],
    demo: "Compare pages with and without DOCTYPE",
    practice: [
      "Add DOCTYPE to existing HTML files",
      "Test different DOCTYPE declarations",
      "Validate HTML with W3C validator"
    ],
    task: "Ensure all HTML files have proper DOCTYPE",
    assignment: "Create comparison page showing HTML4 vs HTML5 DOCTYPE differences"
  },
  {
    title: "HTML Layout",
    theory: [
      "HTML5 semantic elements define page structure",
      "<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>",
      "Improves accessibility and SEO",
      "Replaces generic <div> elements with meaningful tags"
    ],
    examples: [
      "<header>\n  <nav>Navigation</nav>\n</header>\n<main>\n  <section>Content</section>\n</main>\n<footer>Footer</footer>"
    ],
    demo: "Build semantic layout structure",
    practice: [
      "Convert div-based layout to semantic HTML5",
      "Create header with navigation",
      "Structure content with sections and articles"
    ],
    task: "Design semantic page layout",
    assignment: "Build complete website layout using all HTML5 semantic elements for a business homepage"
  }
];