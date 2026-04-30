import { DiPython } from "react-icons/di";
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPython,
  SiSelenium,
  SiPostman,
  SiMysql,
  SiPandas,
  SiGit,
} from "react-icons/si";

function Techstack() {
  return (
    <>
      {/* ===== QA SKILLS ===== */}
      <h1 className="project-heading">
        QA <strong className="purple">Automation Skills</strong>
      </h1>

      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiSelenium />
          <span>Selenium</span>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
          <span>Pytest</span>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
          <span>API Testing</span>
        </Col>
      </Row>

      {/* ===== DATA SKILLS ===== */}
      <h1 className="project-heading" style={{ marginTop: "20px" }}>
        Data <strong className="purple">Analytics Skills</strong>
      </h1>

      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiPython />
          <span>Python</span>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
          <span>SQL</span>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiPandas />
          <span>Pandas</span>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiGit />
          <span>Git</span>
        </Col>
      </Row>
    </>
  );
}


export default Techstack;