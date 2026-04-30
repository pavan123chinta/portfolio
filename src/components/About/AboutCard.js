import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Pavan Chinta</span>{" "}
            from <span className="purple">Hyderabad, India</span>.
            <br />
            I’m a{" "}
            <span className="purple">QA Automation Engineer</span> with 3+ years of experience in automation testing, API validation, and Python-based solutions.{" "}
            <span className="purple">I specialize in building scalable automation frameworks using Selenium, Pytest, and REST APIs.</span>.
            <br />I have also worked on projects in{" "}
            <span className="purple">Data Analytics and Machine Learning</span> applying Python and SQL to solve real-world problems.{" "}
            
            <br />
            <br />
     
          </p>



          <p style={{ color: "rgb(155 126 172)" }}>
            "Focused on delivering reliable automation solutions and data-driven insights."{" "}
          </p>
          <footer className="blockquote-footer">Pavan Chinta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
