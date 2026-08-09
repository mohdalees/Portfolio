import { useEffect, useState } from "react";
import axios from "axios";
import "./Projects.css";
const API_URL = import.meta.env.VITE_API_URL;

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/api/projects`)
      .then(res => setProjects(res.data));
  }, []);

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <div className="project-img-wrapper">
              <img 
                src={p.image || "https://via.placeholder.com/400"} 
                alt={p.title} 
                className="project-img"
              />

              <div className="overlay">
                <h3 className="project-title">{p.title}</h3>
              </div>
            </div>

            <div className="project-info">
              <p><b>Tech:</b> {p.tech}</p>
              <p><b>framework:</b> {p.framework}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
