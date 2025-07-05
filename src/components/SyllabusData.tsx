export interface CourseModule {
  name: string;
  topics: string[];
  duration: string;
}

export interface SyllabusData {
  frontend: CourseModule[];
  backend: CourseModule[];
}

export const syllabusData: SyllabusData = {
  frontend: [
    {
      name: "HTML Fundamentals",
      topics: ["HTML5 Structure", "Semantic Elements", "Forms & Validation", "Accessibility", "HTML5 Features", "Canvas & SVG", "Web Storage", "Geolocation"],
      duration: "Week 1-2"
    },
    {
      name: "CSS Mastery",
      topics: ["CSS3 Features", "Flexbox & Grid", "Responsive Design", "Animations", "Transforms", "Media Queries", "CSS Architecture", "Preprocessors"],
      duration: "Week 3-4"
    },
    {
      name: "JavaScript Core",
      topics: ["ES6+ Features", "DOM Manipulation", "Async Programming", "APIs", "Event Handling", "Error Handling", "Modules", "Testing"],
      duration: "Week 5-6"
    },
    {
      name: "React Development & TypeScript Fundamentals",
      topics: ["Components & JSX", "Hooks & State", "Routing", "Context API", "Custom Hooks", "Performance", "Testing", "Deployment"],
      duration: "Week 7-8"
    }
  ],
  backend: [
    {
      name: "Node.js & Express",
      topics: ["Server Setup", "REST APIs", "Middleware", "Routing", "Authentication", "File Handling", "Security", "Performance"],
      duration: "Week 1-3"
    },
    {
      name: "Databases",
      topics: ["MongoDB", "MySQL", "Database Design", "Queries", "Relationships", "Indexing", "Transactions", "Optimization"],
      duration: "Week 4-7"
    },
    {
      name: "Advanced Backend",
      topics: ["Microservices", "GraphQL", "WebSockets", "Caching", "Message Queues", "Docker", "CI/CD", "Cloud Deployment"],
      duration: "Week 8-12"
    },
    {
      name: "Full-Stack Integration",
      topics: ["Connecting Frontend & Backend", "Authentication", "State Management", "Deployment", "Testing", "Performance Optimization", "Security Best Practices", "Project Showcase"],
      duration: "Week 13-16"
    }
  ]
};