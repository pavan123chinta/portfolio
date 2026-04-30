import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
         <h1 style={{ fontSize: "2.6em" }}>
                  ABOUT ME
         </h1>
            <p className="home-about-body">
            I’m a QA Automation Engineer with 3+ years of experience in
            automation testing, API validation, and Python-based solutions.
            <br />
            <br />
            I have also built hands-on projects in Data Analytics and AI/ML
            through my Caltech program, applying Python, SQL and machine
            learning concepts to solve practical problems.
            <br />
            <br />
            I’m passionate about developing
            <i>
            <b className="purple">
            {" "}Automation Frameworks, Data Analytics,
            Machine Learning and Data Engineering{" "}
            </b>
            </i>
            solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
