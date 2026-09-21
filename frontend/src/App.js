import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Project";

import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Mohd Alees | Built with React & Flask</p>
      </footer>
    </>
  );
}

export default App;