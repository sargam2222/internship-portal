import React from "react";
import { Link } from "react-router-dom";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Example Co.",
    tags: ["Javascript", "react", "Next"],
    time: "1212 min ago",
    type: "Full time",
    location: "Remote",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Desi Developer",
    tags: ["express", "Node", "Firebase"],
    time: "1222 min ago",
    type: "Full time",
    location: "In-office",
  },
   {
    id: 2,
    title: "software Developer",
    company: "art guid home",
    tags: ["Javascript", "Node", "Firebase"],
    time: "1222 min ago",
    type: "Full time",
    location: "In-office",
  },
];

const Home = () => {
  return (
    <div style={{ background: "#0f0f0f", color: "#fff", minHeight: "100vh", padding: "30px" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Internships</h1>

      <div style={{ display: "flex", gap: "10px", marginBottom: "30px", color:'black' }}>
        <select>
            <option>Full time</option>
            <option>Part time</option>
            <option>contract</option>
        </select>
        <select>
            <option>Remote</option>
            <option>hybrid</option>
        </select>
        <button style={{ backgroundColor: "#00d1d1", padding: "10px 20px", border: "none", borderRadius: "5px" }}>Search</button>
       
      </div>

      {jobs.map((job) => (
        <div key={job.id} style={{ background: "#fff", color: "#000", marginBottom: "20px", padding: "20px", borderRadius: "10px" }}>
          <h2>{job.title}</h2>
          <p style={{ color: "#00d1d1", fontWeight: "bold" }}>{job.company}</p>
          <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
            {job.tags.map((tag, index) => (
              <span key={index} style={{ background: "#000", color: "#fff", padding: "5px 10px", borderRadius: "5px" }}>{tag}</span>
            ))}
          </div>
          <p>{job.time} | {job.type} | {job.location}</p>
          <Link to="/apply">
            <button style={{ padding: "10px 15px", borderRadius: "5px", border: "1px solid #000", marginTop: "10px" }}>Apply</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
