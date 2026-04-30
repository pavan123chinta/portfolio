import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  // ✅ FIX 1 — scroll handling (correct way)
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          <h3 style={{ color: "#c770f0", margin: 0 }}>Pavan</h3>
        </Navbar.Brand>

        <Navbar.Toggle
          onClick={() => updateExpanded(expand ? false : "expanded")}
        />

        <Navbar.Collapse>
          <Nav className="ms-auto">

            {/* ✅ FIX 2 — NavLink for active highlight */}
            <Nav.Link
              as={NavLink}
              to="/"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineHome /> Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineUser /> About
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/projects"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineFundProjectionScreen /> Projects
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/resume"
              onClick={() => updateExpanded(false)}
            >
              <CgFileDocument /> Resume
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;