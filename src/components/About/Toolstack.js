import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGithub,
  SiPostman,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <span>VS Code</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <span>GitHub</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <span>Postman</span>
      </Col>

    </Row>
  );
}

export default Toolstack;