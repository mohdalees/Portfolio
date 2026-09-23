import { useEffect, useState } from "react";
import axios from "axios";
import "./About.css";
const API_URL = process.env.REACT_APP_API_URL;

export default function About() {
  const [about, setAbout] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);

  useEffect(() => {
    axios.get(`${API_URL}/api/about`)
      .then(res => {
        setAbout(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.error("About API error:", err)
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
