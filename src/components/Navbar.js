import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assessts/images/logo.svg";
import navIcon1 from "../assessts/images/nav-icon1.svg"
import navIcon2 from "../assessts/images/nav-icon2.svg"
import navIcon3 from "../assessts/images/nav-icon3.svg"


const Navibar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value)=>{
setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scroll ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={()=>onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            {/* <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={()=>onUpdateActiveLink('skills')}

            >
              Skills
            </Nav.Link> */}
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={()=>onUpdateActiveLink('projects')}

            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} /></a>
              <a href="#"><img src={navIcon2} /></a>
              <a href="#"><img src={navIcon3} /></a>
            </div>
            <button className="vvd" onClick={() => console.log("clicked")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navibar;
