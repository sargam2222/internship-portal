import React from "react";
import { Link } from "react-router-dom";

const internships = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechCorp",
    image: "https://webcreatify.com/assets/images/summer-internship-webcreatify.jpg",
    location: "Remote",
  },
  {
    id: 2,
    title: "Backend Developer Intern",
    company: "CodeBase",
    image: "https://webcreatify.com/assets/images/summer-internship-webcreatify.jpg",
    location: "Mumbai",
  },
  {
    id: 3,
    title: "Software Development",
    company: "Google",
    image: "https://webcreatify.com/assets/images/summer-internship-webcreatify.jpg",
    location: "Kolkata",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "DesignX",
    image: "https://webcreatify.com/assets/images/summer-internship-webcreatify.jpg",
    location: "Mumbai",
  },
  {
    id: 5,
    title: "Junior Software Tester",
    company: "Arham Agro Exports",
    image: "https://webcreatify.com/assets/images/summer-internship-webcreatify.jpg",
    location: "Pune",
  },
  {
    id: 6,
    title: "Game Designer",
    company: "Zedex",
    image: "https://webcreatify.com/assets/images/summer-internship-webcreatify.jpg",
    location: "Navi Mumbai",
  },
  {
    id: 7,
    title: "Helpdesk Executive",
    company: "Softcell",
    image: "https://webcreatify.com/assets/images/summer-internship-webcreatify.jpg",
    location: "Thane",
  },
];

const Internships = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Internships</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {internships.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              width: "250px",
              padding: "15px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>{item.title}</h3>
            <p>{item.company}</p>
            <p>{item.location}</p>
            <Link to="/apply">
              <button
                style={{
                  marginTop: "10px",
                  backgroundColor: "#007BFF",
                  color: "white",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Apply Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internships;
