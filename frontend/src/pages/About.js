import { useEffect, useState } from "react";
import axios from "axios";
import "./About.css";
const API_URL = import.meta.env.VITE_API_URL;

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/api/about`)
      .then(res => setAbout(res.data));
  }, []);

  if (!about) return <h2 style={{ textAlign: "center", color: "white" }}>Loading...</h2>;

  return (
    <div className="about-container">
      <div className="glass-card">
        <h1>About Me</h1>
        <h2>{about.name}</h2>
        <h3>{about.role}</h3>
        <p>{about.bio}</p>
        <p><b>Email:</b> {about.email}</p>
      </div>
    </div>
  );
}
