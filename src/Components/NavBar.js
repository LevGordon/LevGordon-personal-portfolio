import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import navicon1 from '../assets/imgs/nav-icon1.svg';
import navicon2 from '../assets/imgs/nav-icon2.svg';
import navicon3 from '../assets/imgs/nav-icon3.svg';

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  const onUpdateActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <h1> Lev Gordon</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/lev-j-gordon/" target='_blank' rel='noreferrer noopener'>
                <img src={navicon1} alt="lev gordon linkedin profile" />
              </a>
              <a href="https://www.facebook.com/Lev.Gordonsa/" target='_blank' rel='noreferrer noopener'>
                <img src={navicon2} alt="lev gordon facebook profile" />
              </a>
              <a href="https://www.instagram.com/lev_gordon/" target='_blank' rel='noreferrer noopener'>
                <img src={navicon3} alt="lev gordon instagram profile" />
              </a>
            </div>
            <button
              className="vvd"
              onClick={() => window.location.replace("/#contact")}
            >
             <span className="connect-button">Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
