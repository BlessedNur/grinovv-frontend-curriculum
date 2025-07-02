import { ReactTopic } from './reactNotes';

export const reactAdvanced: ReactTopic[] = [
  {
    id: 'react-props',
    title: 'React Props',
    content: 'Props are arguments passed into React components. Props are passed to components via HTML attributes and make components reusable.',
    codeExample: `function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}`,
    practice: 'Create components that accept and use props',
    assignment: 'Build a user profile component with multiple props',
    demo: 'Props passing and component reusability'
  },
  {
    id: 'react-events',
    title: 'React Events',
    content: 'React events are triggered by user interactions. Event handlers are functions that are called when events occur.',
    codeExample: `function Button() {
  const handleClick = (e) => {
    e.preventDefault();
    alert('Button clicked!');
  };

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}`,
    practice: 'Handle different types of events in React',
    assignment: 'Create an interactive form with event handling',
    demo: 'Event handling in React components'
  },
  {
    id: 'react-forms',
    title: 'React Forms',
    content: 'React forms handle user input through controlled components where form data is handled by React state.',
    codeExample: `function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
      />
      <button type="submit">Send</button>
    </form>
  );
}`,
    practice: 'Build controlled form components',
    assignment: 'Create a registration form with validation',
    demo: 'Controlled forms with React state'
  },
  {
    id: 'react-router',
    title: 'React Router',
    content: 'React Router enables navigation between different components in a React application, creating single-page applications with multiple views.',
    codeExample: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}`,
    practice: 'Set up routing in React applications',
    assignment: 'Build a multi-page application with React Router',
    demo: 'Navigation and routing in React'
  }
];