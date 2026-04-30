import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.jpeg";
import api from "../../Assets/Projects/api.png";
import healthcare from "../../Assets/Projects/Healthcare.png";
import employee from "../../Assets/Projects/Employee.jpeg";
import sales from "../../Assets/Projects/Sales.jpeg";
import loan from "../../Assets/Projects/Loan.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce UI Automation Framework (Selenium + PyTest)"
              description="Designed and implemented an end-to-end UI test automation framework using Selenium WebDriver and PyTest. Applied Page Object Model (POM) for scalability and reusability, automated critical user workflows, and reduced manual regression effort."
              ghLink="https://github.com/pavan123chinta/ecommerce-ui-automation-framework"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={employee}
             isBlog={false}
             title="Employee Attrition Analysis (Python, Pandas, EDA)"
             description="Performed exploratory data analysis (EDA) on employee datasets using Python (Pandas, Matplotlib) to identify key factors influencing attrition. Derived actionable insights to support employee retention strategies."
             ghLink="https://github.com/pavan123chinta/Employee_Turnover_Analytics"
           />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={sales}
             isBlog={false}
             title="Sales Data Analysis (Python + SQL + Visualization)"
             description="Analyzed sales data using Python and SQL to identify trends, region-wise performance, and product insights. Performed data cleaning and visualization to support data-driven business decisions."
             ghLink="https://github.com/pavan123chinta/Sales_Analysis"
          />
        </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={api}
             isBlog={false}
             title="Scalable REST API Automation Framework (Python Requests)"
             description="Developed a scalable API automation framework using Python Requests library. Implemented JSON schema validation, reusable test utilities, and parallel execution to ensure robust API testing."
             ghLink="https://github.com/pavan123chinta/scalable_api_automation_framework"
          />
        </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={healthcare}
             isBlog={false}
             title="Healthcare Web Automation Testing (Selenium)"
             description="Automated healthcare web application workflows including UI validation and data verification using Selenium. Designed reusable components and ensured cross-browser compatibility for reliable test execution."
             ghLink="https://github.com/pavan123chinta/healthcare-automation-framework"
          />
        </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={loan}
             isBlog={false}
             title="Loan Approval Analysis (Python, Data Preprocessing)"
             description="Analyzed loan datasets to identify key factors affecting loan approval decisions. Applied data preprocessing and feature analysis using Python to derive insights for financial risk assessment."
             ghLink="https://github.com/pavan123chinta/House_Loan_Data_Analysis" 
          />
        </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
