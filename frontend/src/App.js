import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Project';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h2>My Portfolio</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <footer className="footer">
        <p>© 2025 Mohd Alees | Built with React & Flask</p>
      </footer>
    </Router>
  );
}
export default App;