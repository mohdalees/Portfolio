import { useEffect, useState } from "react";
import axios from "axios";
import "./Projects.css";

const API_URL = process.env.REACT_APP_API_URL;

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/projects`)
      .then((res) => {
        setProjects(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.error("Projects API error:", err);
        seterror(true);
        setloading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="about-container">
        <div className="loading-message">
          <div className="loader"></div>
          <h2>Loading About Me...</h2>
          <p>
            Please wait while the portfolio server wakes up.
            <br />
            This may take a few moments.
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="about-container">
        <div className="loading-message">
          <h2>Unable to load About Me</h2>
          <p>Please refresh the page and try again.</p>
        </div>
      </div>
    );
  }

  // Show only 3 projects initially
  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 3);

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">
        {visibleProjects.map((p, i) => (
          <div key={i} className="project-card">

            {/* Project Image */}
            <div className="project-img-wrapper">
              <img
                src={
                  p.image ||
                  "https://postimages.org/"
                }
                alt={p.title || "Project"}
                className="project-img"
              />
            </div>

            {/* Project Information */}
            <div className="project-info">

              <h2 className="project-title">
                {p.title}
              </h2>

              <p>
                {p.desc}
              </p>
              <div className="project-tech">
                {p.tech && p.tech.split(",").map((technology, index) => (
                  <span key={index}>
                    {technology.trim()}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={p.github}>GitHub</a>
                {/* <a href={project.demo}>Live Demo</a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* More Projects Button */}
      {projects.length > 3 && (
        <div className="more-projects">
          <button
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "More Projects"}
          </button>
        </div>
      )}
    </div>
  );
}
