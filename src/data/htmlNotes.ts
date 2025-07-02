export interface HTMLTopic {
  id: string;
  title: string;
  content: string;
  codeExample?: string;
  practice?: string;
  assignment?: string;
  demo?: string;
}

export const htmlNotes: HTMLTopic[] = [
  // HTML BASIC
  {
    id: "html-introduction",
    title: "HTML Introduction",
    content:
      "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using markup elements called tags. HTML tells the browser how to display content.",
    codeExample: `<!DOCTYPE html>
<html>
<head>
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to HTML!</h1>
    <p>This is my first paragraph.</p>
</body>
</html>`,
    practice:
      "Create a basic HTML page with DOCTYPE, html, head, and body tags",
    assignment:
      "Build a personal homepage with your name, a welcome message, and basic structure",
    demo: "Interactive HTML structure explorer",
  },
  {
    id: "html-getting-started",
    title: "HTML Getting Started",
    content:
      "To start with HTML, you need a text editor and a web browser. HTML files use .html extension. Every HTML document starts with DOCTYPE declaration and contains html, head, and body elements.",
    codeExample: `<!-- Step 1: Create file with .html extension -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Getting Started</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>Welcome to web development!</p>
</body>
</html>`,
    practice:
      "Set up your development environment and create your first HTML file",
    assignment:
      'Create an HTML file that displays "Hello World" and save it to view in browser',
    demo: "Live code editor showing HTML in action",
  },
  {
    id: "html-elements",
    title: "HTML Elements",
    content:
      "HTML elements are the building blocks of HTML pages. An element consists of a start tag, content, and an end tag. Some elements are self-closing and don't need closing tags.",
    codeExample: `<!-- Container elements -->
<div>This is a div element</div>
<span>This is a span element</span>
<p>This is a paragraph element</p>

<!-- Self-closing elements -->
<br>
<hr>
<img src="image.jpg" alt="Description">
<input type="text" placeholder="Enter text">

<!-- Nested elements -->
<div>
    <h2>Nested Content</h2>
    <p>This paragraph is <strong>inside</strong> a div.</p>
</div>`,
    practice: "Practice creating different types of HTML elements",
    assignment: "Create a page using at least 5 different HTML elements",
    demo: "Element inspector showing HTML structure",
  },
  {
    id: "html-attributes",
    title: "HTML Attributes",
    content:
      "HTML attributes provide additional information about elements. They are specified in the opening tag and usually come in name/value pairs. Common attributes include id, class, src, href, and style.",
    codeExample: `<!-- Common attributes -->
<div id="main-content" class="container">
    <h1 class="title" style="color: blue;">Title with attributes</h1>
    <a href="https://example.com" target="_blank">External link</a>
    <img src="photo.jpg" alt="Photo description" width="300" height="200">
    <input type="email" id="email" name="email" required>
</div>

<!-- Data attributes -->
<button data-action="save" data-id="123">Save</button>`,
    practice: "Add various attributes to HTML elements",
    assignment:
      "Create a contact form with proper attributes for accessibility",
    demo: "Attribute manipulation demo",
  },
  {
    id: "html-headings",
    title: "HTML Headings",
    content:
      "HTML headings are defined with h1 to h6 tags. h1 is the largest and most important, while h6 is the smallest. Headings are crucial for SEO and accessibility.",
    codeExample: `<h1>Main Heading (Most Important)</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>
<h4>Sub-subsection Heading</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>

<!-- Proper heading hierarchy -->
<article>
    <h1>Article Title</h1>
    <h2>Chapter 1</h2>
    <h3>Section 1.1</h3>
    <h3>Section 1.2</h3>
    <h2>Chapter 2</h2>
</article>`,
    practice: "Create a document outline using proper heading hierarchy",
    assignment: "Build a table of contents using all heading levels",
    demo: "Heading hierarchy visualization",
  },
  {
    id: "html-paragraphs",
    title: "HTML Paragraphs",
    content:
      "The p element defines a paragraph. Browsers automatically add space before and after paragraphs. Use paragraphs to organize text content logically.",
    codeExample: `<p>This is a simple paragraph of text.</p>

<p>This is another paragraph with <strong>bold text</strong> 
and <em>italic text</em> inside it.</p>

<p>
    This paragraph spans multiple lines in the code,
    but browsers will display it as a single paragraph
    with normal spacing.
</p>

<!-- Paragraph with line break -->
<p>First line<br>Second line in same paragraph</p>`,
    practice: "Write several paragraphs with different text formatting",
    assignment:
      "Create a blog post with multiple paragraphs and text formatting",
    demo: "Text formatting showcase",
  },
  {
    id: "html-links",
    title: "HTML Links",
    content:
      "Links are created with the anchor (a) element and href attribute. Links can point to other pages, sections of the same page, email addresses, or phone numbers.",
    codeExample: `<!-- External links -->
<a href="https://www.google.com">Visit Google</a>
<a href="https://www.example.com" target="_blank">Open in new tab</a>

<!-- Internal links -->
<a href="about.html">About Page</a>
<a href="#section1">Jump to Section 1</a>

<!-- Email and phone links -->
<a href="mailto:someone@example.com">Send Email</a>
<a href="tel:+1234567890">Call Us</a>

<!-- Download link -->
<a href="document.pdf" download>Download PDF</a>`,
    practice: "Create different types of links (external, internal, email)",
    assignment: "Build a navigation menu with multiple link types",
    demo: "Interactive link behavior demonstration",
  },
  {
    id: "html-text-formatting",
    title: "HTML Text Formatting",
    content:
      "HTML provides various tags for text formatting including bold, italic, underline, and more semantic elements like strong and em for emphasis.",
    codeExample: `<!-- Physical formatting -->
<b>Bold text</b>
<i>Italic text</i>
<u>Underlined text</u>
<s>Strikethrough text</s>

<!-- Semantic formatting -->
<strong>Important text (strong emphasis)</strong>
<em>Emphasized text</em>
<mark>Highlighted text</mark>
<small>Small text</small>

<!-- Other formatting -->
<sub>Subscript</sub> and <sup>Superscript</sup>
<code>Computer code</code>
<kbd>Keyboard input</kbd>
<var>Variable</var>
<samp>Sample output</samp>`,
    practice: "Apply different text formatting to a paragraph",
    assignment: "Create a scientific article with proper text formatting",
    demo: "Text formatting comparison tool",
  },
  {
    id: "html-styles",
    title: "HTML Styles",
    content:
      "The style attribute allows you to add CSS styling directly to HTML elements. While inline styles work, external CSS is preferred for maintainability.",
    codeExample: `<!-- Inline styles -->
<h1 style="color: red; text-align: center;">Red Centered Title</h1>
<p style="font-size: 18px; color: blue; font-family: Arial;">Styled paragraph</p>

<!-- Multiple style properties -->
<div style="
    background-color: lightgray;
    padding: 20px;
    border: 2px solid black;
    border-radius: 10px;
    margin: 10px;
">
    Styled container
</div>

<!-- Better approach: External CSS -->
<link rel="stylesheet" href="styles.css">
<div class="styled-container">Content</div>`,
    practice: "Style HTML elements using inline CSS",
    assignment: "Create a colorful webpage using various CSS properties",
    demo: "Style editor with live preview",
  },
  {
    id: "html-images",
    title: "HTML Images",
    content:
      "Images are embedded using the img element with src attribute. Always include alt text for accessibility. You can control image size and alignment.",
    codeExample: `<!-- Basic image -->
<img src="photo.jpg" alt="Description of photo">

<!-- Image with size control -->
<img src="logo.png" alt="Company logo" width="200" height="100">

<!-- Responsive image -->
<img src="banner.jpg" alt="Banner" style="max-width: 100%; height: auto;">

<!-- Image with link -->
<a href="gallery.html">
    <img src="thumbnail.jpg" alt="View gallery">
</a>

<!-- Figure with caption -->
<figure>
    <img src="chart.png" alt="Sales chart">
    <figcaption>Monthly sales data for 2023</figcaption>
</figure>`,
    practice: "Add images with proper alt text and sizing",
    assignment: "Create a photo gallery with captions",
    demo: "Image optimization and accessibility checker",
  },
  {
    id: "html-tables",
    title: "HTML Tables",
    content:
      "Tables display data in rows and columns using table, tr (row), th (header), and td (cell) elements. Tables should be used for tabular data, not layout.",
    codeExample: `<!-- Basic table -->
<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
    </tr>
    <tr>
        <td>John</td>
        <td>25</td>
        <td>New York</td>
    </tr>
    <tr>
        <td>Jane</td>
        <td>30</td>
        <td>London</td>
    </tr>
</table>

<!-- Structured table -->
<table>
    <thead>
        <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Laptop</td>
            <td>$999</td>
            <td>15</td>
        </tr>
    </tbody>
</table>`,
    practice: "Create tables with headers and multiple rows",
    assignment: "Build a product catalog table with styling",
    demo: "Interactive table builder",
  },
  {
    id: "html-lists",
    title: "HTML Lists",
    content:
      "HTML supports ordered lists (ol), unordered lists (ul), and description lists (dl). Lists are essential for organizing content hierarchically.",
    codeExample: `<!-- Unordered list -->
<ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Orange</li>
</ul>

<!-- Ordered list -->
<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>

<!-- Nested lists -->
<ul>
    <li>Fruits
        <ul>
            <li>Apple</li>
            <li>Banana</li>
        </ul>
    </li>
    <li>Vegetables
        <ul>
            <li>Carrot</li>
            <li>Broccoli</li>
        </ul>
    </li>
</ul>

<!-- Description list -->
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>`,
    practice: "Create different types of lists with nesting",
    assignment: "Build a recipe with ingredients list and preparation steps",
    demo: "List style customization tool",
  },
  {
    id: "html-forms",
    title: "HTML Forms",
    content:
      "Forms collect user input using form element with various input types. Forms are essential for user interaction and data collection.",
    codeExample: `<form action="/submit" method="POST">
    <!-- Text inputs -->
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <!-- Password -->
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
    
    <!-- Textarea -->
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" cols="50"></textarea>
    
    <!-- Select dropdown -->
    <label for="country">Country:</label>
    <select id="country" name="country">
        <option value="usa">USA</option>
        <option value="uk">UK</option>
        <option value="canada">Canada</option>
    </select>
    
    <!-- Radio buttons -->
    <fieldset>
        <legend>Gender:</legend>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label>
    </fieldset>
    
    <!-- Checkboxes -->
    <input type="checkbox" id="newsletter" name="newsletter">
    <label for="newsletter">Subscribe to newsletter</label>
    
    <!-- Submit button -->
    <input type="submit" value="Submit">
</form>`,
    practice: "Create a contact form with various input types",
    assignment: "Build a registration form with validation",
    demo: "Form validation and submission demo",
  },
  {
    id: "html-iframes",
    title: "HTML Iframes",
    content:
      "Iframes embed another document within the current HTML document. Commonly used for embedding videos, maps, or other web content.",
    codeExample: `<!-- Basic iframe -->
<iframe src="https://www.example.com" width="600" height="400">
    <p>Your browser does not support iframes.</p>
</iframe>

<!-- YouTube video embed -->
<iframe width="560" height="315" 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        frameborder="0" 
        allowfullscreen>
</iframe>

<!-- Google Maps embed -->
<iframe src="https://www.google.com/maps/embed?..." 
        width="600" height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy">
</iframe>

<!-- Responsive iframe -->
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
    <iframe src="content.html" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
    </iframe>
</div>`,
    practice: "Embed external content using iframes",
    assignment: "Create a page with embedded video and map",
    demo: "Iframe security and responsiveness showcase",
  },

  // HTML ADVANCED
  {
    id: "html-doctypes",
    title: "HTML Doctypes",
    content:
      "DOCTYPE declaration tells the browser which version of HTML the document uses. HTML5 uses a simple DOCTYPE declaration.",
    codeExample: `<!-- HTML5 DOCTYPE (recommended) -->
<!DOCTYPE html>

<!-- HTML 4.01 Strict -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" 
"http://www.w3.org/TR/html4/strict.dtd">

<!-- HTML 4.01 Transitional -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" 
"http://www.w3.org/TR/html4/loose.dtd">

<!-- XHTML 1.0 Strict -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- Complete HTML5 document -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML5 Document</title>
</head>
<body>
    <h1>Modern HTML5 Page</h1>
</body>
</html>`,
    practice: "Compare different DOCTYPE declarations",
    assignment: "Convert an old HTML document to HTML5",
    demo: "DOCTYPE impact on browser rendering",
  },
  {
    id: "html-layout",
    title: "HTML Layout",
    content:
      "HTML5 introduced semantic layout elements like header, nav, main, section, article, aside, and footer to create meaningful page structure.",
    codeExample: `<!DOCTYPE html>
<html>
<head>
    <title>Semantic Layout</title>
</head>
<body>
    <header>
        <h1>Website Title</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="home">
            <h2>Home Section</h2>
            <article>
                <h3>Article Title</h3>
                <p>Article content...</p>
            </article>
        </section>
        
        <aside>
            <h3>Sidebar</h3>
            <p>Additional information</p>
        </aside>
    </main>
    
    <footer>
        <p>&copy; 2023 Website Name</p>
    </footer>
</body>
</html>`,
    practice: "Create a semantic HTML5 layout",
    assignment: "Build a blog layout using semantic elements",
    demo: "Semantic vs non-semantic layout comparison",
  },
  {
    id: "html-head",
    title: "HTML Head",
    content:
      "The head element contains metadata about the document including title, character encoding, viewport settings, and links to external resources.",
    codeExample: `<head>
    <!-- Character encoding -->
    <meta charset="UTF-8">
    
    <!-- Viewport for responsive design -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Page title -->
    <title>Page Title</title>
    
    <!-- Meta description for SEO -->
    <meta name="description" content="Page description for search engines">
    <meta name="keywords" content="html, tutorial, web development">
    <meta name="author" content="Your Name">
    
    <!-- External CSS -->
    <link rel="stylesheet" href="styles.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    
    <!-- External JavaScript -->
    <script src="script.js"></script>
    
    <!-- Inline CSS -->
    <style>
        body { font-family: Arial, sans-serif; }
    </style>
</head>`,
    practice: "Set up a comprehensive HTML head section",
    assignment: "Create SEO-optimized head section for a business website",
    demo: "Head element impact on page loading and SEO",
  },
  {
    id: "html-meta",
    title: "HTML Meta",
    content:
      "Meta elements provide metadata about the HTML document. They are used for SEO, social media sharing, and browser behavior configuration.",
    codeExample: `<!-- Essential meta tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Learn HTML with comprehensive examples">
<meta name="keywords" content="HTML, tutorial, web development">
<meta name="author" content="Your Name">

<!-- Social Media Meta Tags (Open Graph) -->
<meta property="og:title" content="HTML Tutorial">
<meta property="og:description" content="Complete HTML learning guide">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:url" content="https://example.com">

<!-- Twitter Card Meta Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="HTML Tutorial">
<meta name="twitter:description" content="Complete HTML learning guide">

<!-- Browser behavior -->
<meta http-equiv="refresh" content="30">
<meta name="robots" content="index, follow">`,
    practice: "Add comprehensive meta tags to a webpage",
    assignment: "Create SEO-optimized meta tags for a portfolio website",
    demo: "Meta tag impact on search engines and social media",
  },
  {
    id: "html-scripts",
    title: "HTML Scripts",
    content:
      "The script element is used to embed or reference JavaScript code. Scripts can be inline or external and can be placed in head or body.",
    codeExample: `<!-- External JavaScript -->
<script src="script.js"></script>

<!-- Inline JavaScript -->
<script>
    function showAlert() {
        alert("Hello from JavaScript!");
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        console.log("Page loaded!");
    });
</script>

<!-- Script with attributes -->
<script src="module.js" type="module"></script>
<script src="legacy.js" defer></script>
<script src="async-script.js" async></script>

<!-- Conditional script loading -->
<script>
    if (typeof jQuery === 'undefined') {
        document.write('<script src="jquery.min.js"><\/script>');
    }
</script>`,
    practice: "Add JavaScript to HTML pages using different methods",
    assignment:
      "Create an interactive webpage with external and inline scripts",
    demo: "Script loading strategies demonstration",
  },
  {
    id: "html-entities",
    title: "HTML Entities",
    content:
      "HTML entities are used to display reserved characters and special symbols. They start with & and end with semicolon.",
    codeExample: `<!-- Common HTML entities -->
<p>&lt;html&gt; tag creates an HTML document</p>
<p>Copyright &copy; 2023</p>
<p>Price: &dollar;29.99</p>
<p>&quot;Hello World&quot; is a common example</p>

<!-- Mathematical symbols -->
<p>2 &times; 3 = 6</p>
<p>10 &divide; 2 = 5</p>
<p>&alpha; + &beta; = &gamma;</p>

<!-- Currency symbols -->
<p>&euro; 100</p>
<p>&yen; 1000</p>
<p>&pound; 50</p>

<!-- Arrows and symbols -->
<p>&larr; Left arrow</p>
<p>&rarr; Right arrow</p>
<p>&hearts; &clubs; &diamonds; &spades;</p>

<!-- Non-breaking space -->
<p>This&nbsp;text&nbsp;won't&nbsp;break</p>`,
    practice: "Use HTML entities to display special characters",
    assignment: "Create a reference page for common HTML entities",
    demo: "HTML entity decoder and encoder tool",
  },
  {
    id: "html-url",
    title: "HTML URL",
    content:
      "URLs (Uniform Resource Locators) specify the address of web resources. Understanding URL structure is crucial for linking and navigation.",
    codeExample: `<!-- URL structure: protocol://domain:port/path?query#fragment -->

<!-- Absolute URLs -->
<a href="https://www.example.com/page.html">Absolute URL</a>
<a href="mailto:user@example.com">Email link</a>
<a href="tel:+1234567890">Phone link</a>

<!-- Relative URLs -->
<a href="page.html">Same directory</a>
<a href="folder/page.html">Subdirectory</a>
<a href="../page.html">Parent directory</a>
<a href="/root/page.html">From root</a>

<!-- URL with query parameters -->
<a href="search.html?q=html&category=tutorial">Search link</a>

<!-- Fragment identifiers (anchors) -->
<a href="#section1">Jump to section</a>
<a href="page.html#top">Go to top of page</a>

<!-- Base URL for relative links -->
<base href="https://www.example.com/">`,
    practice: "Create different types of URLs and links",
    assignment: "Build a site with proper navigation using various URL types",
    demo: "URL structure analyzer and validator",
  },
  {
    id: "html-url-encode",
    title: "HTML URL Encode",
    content:
      "URL encoding converts special characters into a format that can be transmitted over the Internet. Spaces become %20, etc.",
    codeExample: `<!-- Characters that need encoding -->
<!-- Space becomes %20 -->
<a href="search.php?q=hello%20world">Search for "hello world"</a>

<!-- Special characters encoding -->
<a href="page.php?name=John%26Jane">John & Jane</a>
<a href="redirect.php?url=https%3A//example.com">Redirect</a>

<!-- JavaScript URL encoding -->
<script>
    const searchTerm = "hello world & more";
    const encodedTerm = encodeURIComponent(searchTerm);
    console.log(encodedTerm); // hello%20world%20%26%20more
    
    // Building URLs with parameters
    const baseUrl = "search.php";
    const params = new URLSearchParams({
        q: "hello world",
        category: "tutorials",
        sort: "date"
    });
    const fullUrl = baseUrl + "?" + params.toString();
</script>

<!-- Common encodings -->
<!-- Space: %20, &: %26, ?: %3F, #: %23, /: %2F -->`,
    practice: "Practice URL encoding for different scenarios",
    assignment: "Create a search form that properly encodes user input",
    demo: "URL encoder/decoder utility",
  },
  {
    id: "html-validation",
    title: "HTML Validation",
    content:
      "HTML validation checks if your code follows HTML standards. Valid HTML ensures better browser compatibility and accessibility.",
    codeExample: `<!-- Valid HTML5 structure -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Valid HTML Page</title>
</head>
<body>
    <!-- Properly nested elements -->
    <header>
        <h1>Page Title</h1>
        <nav>
            <ul>
                <li><a href="home.html">Home</a></li>
                <li><a href="about.html">About</a></li>
            </ul>
        </nav>
    </header>
    
    <!-- Required alt attributes -->
    <img src="image.jpg" alt="Description">
    
    <!-- Proper form labels -->
    <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
    </form>
    
    <!-- Self-closing tags in HTML5 -->
    <br>
    <hr>
</body>
</html>

<!-- Validation tools -->
<!-- W3C Markup Validator: https://validator.w3.org/ -->`,
    practice: "Validate HTML documents using online validators",
    assignment: "Fix validation errors in provided HTML code",
    demo: "Live HTML validation with error highlighting",
  },

  // HTML5 FEATURES
  {
    id: "html5-new-input-types",
    title: "HTML5 New Input Types",
    content:
      "HTML5 introduced new input types for better user experience and built-in validation including email, date, color, range, and more.",
    codeExample: `<form>
    <!-- Email input with validation -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <!-- Password with pattern -->
    <label for="password">Password:</label>
    <input type="password" id="password" pattern=".{8,}" title="8+ characters">
    
    <!-- Number input with range -->
    <label for="age">Age:</label>
    <input type="number" id="age" min="1" max="120" value="25">
    
    <!-- Date and time inputs -->
    <label for="birthday">Birthday:</label>
    <input type="date" id="birthday">
    
    <label for="appointment">Appointment:</label>
    <input type="datetime-local" id="appointment">
    
    <!-- Range slider -->
    <label for="volume">Volume:</label>
    <input type="range" id="volume" min="0" max="100" value="50">
    
    <!-- Color picker -->
    <label for="color">Choose color:</label>
    <input type="color" id="color" value="#ff0000">
    
    <!-- File upload -->
    <label for="file">Upload file:</label>
    <input type="file" id="file" accept=".jpg,.png,.pdf">
    
    <!-- Search input -->
    <label for="search">Search:</label>
    <input type="search" id="search" placeholder="Search...">
    
    <!-- URL input -->
    <label for="website">Website:</label>
    <input type="url" id="website" placeholder="https://example.com">
    
    <!-- Telephone -->
    <label for="phone">Phone:</label>
    <input type="tel" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
</form>`,
    practice: "Create a comprehensive form using all new HTML5 input types",
    assignment:
      "Build a registration form with proper validation using HTML5 inputs",
    demo: "HTML5 input types showcase with validation",
  },
  {
    id: "html5-canvas",
    title: "HTML5 Canvas",
    content:
      "Canvas element provides a drawing surface for graphics, animations, and visualizations using JavaScript. It supports 2D and WebGL contexts.",
    codeExample: `<canvas id="myCanvas" width="400" height="300" style="border: 1px solid black;">
    Your browser does not support the canvas element.
</canvas>

<script>
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    
    // Draw rectangle
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(10, 10, 100, 80);
    
    // Draw circle
    ctx.beginPath();
    ctx.arc(200, 60, 40, 0, 2 * Math.PI);
    ctx.fillStyle = '#0000FF';
    ctx.fill();
    
    // Draw line
    ctx.beginPath();
    ctx.moveTo(50, 150);
    ctx.lineTo(350, 150);
    ctx.strokeStyle = '#00FF00';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Draw text
    ctx.font = '20px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText('Canvas Graphics!', 50, 200);
    
    // Draw gradient
    const gradient = ctx.createLinearGradient(0, 220, 0, 280);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1, 'blue');
    ctx.fillStyle = gradient;
    ctx.fillRect(50, 220, 200, 60);
</script>`,
    practice: "Create basic shapes and drawings on canvas",
    assignment: "Build a simple drawing application using canvas",
    demo: "Interactive canvas drawing tool",
  },
  {
    id: "html5-svg",
    title: "HTML5 SVG",
    content:
      "SVG (Scalable Vector Graphics) creates vector-based graphics that scale without quality loss. SVG can be inline in HTML or external files.",
    codeExample: `<!-- Inline SVG -->
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <!-- Rectangle -->
    <rect x="10" y="10" width="80" height="60" fill="red" stroke="black" stroke-width="2"/>
    
    <!-- Circle -->
    <circle cx="150" cy="50" r="30" fill="blue" opacity="0.7"/>
    
    <!-- Line -->
    <line x1="10" y1="100" x2="190" y2="100" stroke="green" stroke-width="3"/>
    
    <!-- Polygon (triangle) -->
    <polygon points="100,120 130,170 70,170" fill="yellow" stroke="purple"/>
    
    <!-- Text -->
    <text x="50" y="190" font-family="Arial" font-size="16" fill="black">SVG Text</text>
    
    <!-- Path (complex shape) -->
    <path d="M 10 180 Q 50 140 90 180 T 170 180" stroke="orange" fill="none" stroke-width="2"/>
</svg>

<!-- SVG with animation -->
<svg width="100" height="100">
    <circle cx="50" cy="50" r="20" fill="red">
        <animate attributeName="r" values="20;40;20" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="fill" values="red;blue;red" dur="2s" repeatCount="indefinite"/>
    </circle>
</svg>

<!-- External SVG -->
<img src="logo.svg" alt="Logo" width="100" height="50">`,
    practice: "Create various SVG shapes and graphics",
    assignment: "Design a logo using SVG with animations",
    demo: "SVG vs Canvas comparison tool",
  },
  {
    id: "html5-audio",
    title: "HTML5 Audio",
    content:
      "HTML5 audio element provides native audio playback without plugins. Supports multiple formats and provides JavaScript API for control.",
    codeExample: `<!-- Basic audio player -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>

<!-- Audio with attributes -->
<audio controls autoplay loop muted preload="auto">
    <source src="music.mp3" type="audio/mpeg">
</audio>

<!-- JavaScript audio control -->
<audio id="myAudio">
    <source src="sound.mp3" type="audio/mpeg">
</audio>

<button onclick="playAudio()">Play</button>
<button onclick="pauseAudio()">Pause</button>
<button onclick="changeVolume()">Volume 50%</button>

<script>
    const audio = document.getElementById('myAudio');
    
    function playAudio() {
        audio.play();
    }
    
    function pauseAudio() {
        audio.pause();
    }
    
    function changeVolume() {
        audio.volume = 0.5;
    }
    
    // Event listeners
    audio.addEventListener('loadstart', () => console.log('Loading started'));
    audio.addEventListener('canplay', () => console.log('Can play'));
    audio.addEventListener('ended', () => console.log('Playback ended'));
</script>`,
    practice: "Implement audio playback with custom controls",
    assignment: "Create a music player with playlist functionality",
    demo: "Audio API showcase with waveform visualization",
  },
  {
    id: "html5-video",
    title: "HTML5 Video",
    content:
      "HTML5 video element enables native video playback in browsers. Supports multiple formats and provides extensive JavaScript API.",
    codeExample: `<!-- Basic video player -->
<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    Your browser does not support the video tag.
</video>

<!-- Video with poster and attributes -->
<video width="640" height="360" controls poster="thumbnail.jpg" preload="metadata">
    <source src="video.webm" type="video/webm">
    <source src="video.mp4" type="video/mp4">
    <track kind="subtitles" src="subtitles.vtt" srclang="en" label="English">
</video>

<!-- JavaScript video control -->
<video id="myVideo" width="400" height="300">
    <source src="demo.mp4" type="video/mp4">
</video>

<div>
    <button onclick="playPause()">Play/Pause</button>
    <button onclick="makeBig()">Big</button>
    <button onclick="makeSmall()">Small</button>
    <button onclick="makeNormal()">Normal</button>
</div>

<script>
    const video = document.getElementById('myVideo');
    
    function playPause() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
    
    function makeBig() {
        video.width = 800;
        video.height = 600;
    }
    
    function makeSmall() {
        video.width = 200;
        video.height = 150;
    }
    
    function makeNormal() {
        video.width = 400;
        video.height = 300;
    }
</script>`,
    practice: "Create a video player with custom controls",
    assignment: "Build a video gallery with multiple players",
    demo: "Advanced video player with chapters and annotations",
  },
  {
    id: "html5-web-storage",
    title: "HTML5 Web Storage",
    content:
      "Web Storage provides localStorage and sessionStorage for client-side data storage. More secure and efficient than cookies.",
    codeExample: `<script>
    // localStorage - persists until manually cleared
    localStorage.setItem('username', 'John Doe');
    localStorage.setItem('preferences', JSON.stringify({
        theme: 'dark',
        language: 'en'
    }));
    
    // Retrieve from localStorage
    const username = localStorage.getItem('username');
    const preferences = JSON.parse(localStorage.getItem('preferences'));
    
    console.log('Username:', username);
    console.log('Theme:', preferences.theme);
    
    // sessionStorage - cleared when tab closes
    sessionStorage.setItem('sessionId', 'abc123');
    sessionStorage.setItem('cart', JSON.stringify(['item1', 'item2']));
    
    // Check storage support
    if (typeof Storage !== 'undefined') {
        console.log('Web Storage supported');
    } else {
        console.log('Web Storage not supported');
    }
    
    // Storage events (listen to changes)
    window.addEventListener('storage', function(event) {
        console.log('Storage changed:', event.key, event.newValue);
    });
    
    // Clear storage
    localStorage.removeItem('username');
    localStorage.clear(); // Clear all localStorage
    sessionStorage.clear(); // Clear all sessionStorage
</script>

<!-- Practical example: Save form data -->
<form id="userForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    
    <button type="button" onclick="saveData()">Save</button>
    <button type="button" onclick="loadData()">Load</button>
</form>

<script>
    function saveData() {
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value
        };
        localStorage.setItem('formData', JSON.stringify(formData));
        alert('Data saved!');
    }
    
    function loadData() {
        const saved = localStorage.getItem('formData');
        if (saved) {
            const data = JSON.parse(saved);
            document.getElementById('name').value = data.name;
            document.getElementById('email').value = data.email;
        }
    }
</script>`,
    practice: "Implement data persistence using web storage",
    assignment: "Create a note-taking app that saves to localStorage",
    demo: "Web storage vs cookies comparison",
  },
  {
    id: "html5-geolocation",
    title: "HTML5 Geolocation",
    content:
      "Geolocation API allows web applications to access user's geographic location with permission. Useful for location-based services.",
    codeExample: `<button onclick="getLocation()">Get My Location</button>
<p id="location-info"></p>

<script>
    function getLocation() {
        if (navigator.geolocation) {
            // Request location with options
            const options = {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 60000
            };
            
            navigator.geolocation.getCurrentPosition(
                showPosition, 
                showError, 
                options
            );
        } else {
            document.getElementById('location-info').innerHTML = 
                "Geolocation is not supported by this browser.";
        }
    }
    
    function showPosition(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const accuracy = position.coords.accuracy;
        
        document.getElementById('location-info').innerHTML = 
            "Latitude: " + lat + "<br>" +
            "Longitude: " + lon + "<br>" +
            "Accuracy: " + accuracy + " meters";
        
        // Optional: Show on map
        showOnMap(lat, lon);
    }
    
    function showError(error) {
        const info = document.getElementById('location-info');
        switch(error.code) {
            case error.PERMISSION_DENIED:
                info.innerHTML = "User denied the request for Geolocation.";
                break;
            case error.POSITION_UNAVAILABLE:
                info.innerHTML = "Location information is unavailable.";
                break;
            case error.TIMEOUT:
                info.innerHTML = "The request to get user location timed out.";
                break;
            default:
                info.innerHTML = "An unknown error occurred.";
        }
    }
    
    // Watch position changes
    let watchId;
    function startWatching() {
        watchId = navigator.geolocation.watchPosition(showPosition, showError);
    }
    
    function stopWatching() {
        navigator.geolocation.clearWatch(watchId);
    }
    
    function showOnMap(lat, lon) {
        // Example: Google Maps link
        const mapUrl = \`https://maps.google.com/maps?q=\${lat},\${lon}\`;
        document.getElementById('location-info').innerHTML += 
            \`<br><a href="\${mapUrl}" target="_blank">View on Map</a>\`;
    }
</script>`,
    practice: "Implement location detection and mapping",
    assignment: "Create a weather app that uses user location",
    demo: "Location-based service demonstration",
  },
  {
    id: "html5-drag-drop",
    title: "HTML5 Drag & Drop",
    content:
      "HTML5 Drag and Drop API enables interactive dragging of elements. Useful for reordering lists, file uploads, and interactive interfaces.",
    codeExample: `<style>
    .drag-container {
        display: flex;
        gap: 20px;
        margin: 20px 0;
    }
    
    .drag-item {
        padding: 10px;
        background: #4CAF50;
        color: white;
        cursor: move;
        border-radius: 5px;
    }
    
    .drop-zone {
        width: 200px;
        height: 200px;
        border: 2px dashed #ccc;
        text-align: center;
        line-height: 200px;
        margin: 10px;
    }
    
    .drop-zone.dragover {
        border-color: #4CAF50;
        background-color: #f0f8f0;
    }
</style>

<!-- Draggable items -->
<div class="drag-container">
    <div class="drag-item" draggable="true" ondragstart="drag(event)" id="item1">
        Drag me!
    </div>
    <div class="drag-item" draggable="true" ondragstart="drag(event)" id="item2">
        Or me!
    </div>
</div>

<!-- Drop zones -->
<div class="drop-zone" 
     ondrop="drop(event)" 
     ondragover="allowDrop(event)"
     ondragenter="dragEnter(event)"
     ondragleave="dragLeave(event)">
    Drop Zone 1
</div>

<div class="drop-zone" 
     ondrop="drop(event)" 
     ondragover="allowDrop(event)"
     ondragenter="dragEnter(event)"
     ondragleave="dragLeave(event)">
    Drop Zone 2
</div>

<!-- File drop zone -->
<div id="file-drop-zone" class="drop-zone">
    Drop files here
</div>

<script>
    function allowDrop(event) {
        event.preventDefault();
    }
    
    function drag(event) {
        event.dataTransfer.setData("text", event.target.id);
        event.target.style.opacity = "0.5";
    }
    
    function drop(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        const draggedElement = document.getElementById(data);
        
        if (event.target.classList.contains('drop-zone')) {
            event.target.appendChild(draggedElement);
            draggedElement.style.opacity = "1";
        }
        
        event.target.classList.remove('dragover');
    }
    
    function dragEnter(event) {
        event.target.classList.add('dragover');
    }
    
    function dragLeave(event) {
        event.target.classList.remove('dragover');
    }
    
    // File drop handling
    const fileDropZone = document.getElementById('file-drop-zone');
    
    fileDropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        fileDropZone.classList.add('dragover');
    });
    
    fileDropZone.addEventListener('dragleave', () => {
        fileDropZone.classList.remove('dragover');
    });
    
    fileDropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        fileDropZone.classList.remove('dragover');
        
        const files = e.dataTransfer.files;
        for (let file of files) {
            console.log('Dropped file:', file.name, file.size);
            fileDropZone.innerHTML += \`<br>File: \${file.name}\`;
        }
    });
</script>`,
    practice: "Create sortable lists using drag and drop",
    assignment: "Build a kanban board with drag and drop functionality",
    demo: "Advanced drag and drop file uploader",
  },
];
