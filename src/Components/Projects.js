import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

import TrackVisibility from "react-on-screen";

import DR from "../assets/imgs/projects/DR.png";
import PP from "../assets/imgs/projects/PP.png";
import PT from "../assets/imgs/projects/PT.png";
import RM from "../assets/imgs/projects/RM.png";
import TRVL from "../assets/imgs/projects/TRVL.png";
import WLM from "../assets/imgs/projects/WLM.png";
import SS from "../assets/imgs/projects/SS.png";
import FD from '../assets/imgs/projects/FD.png';
import MBK from '../assets/imgs/projects/MBK.png';

function Projects() {
  const projects1 = [
    {
      title: "Restaurant Reservation App",
      description:
        "A full-stack application built with Node, Express, Knex and React that allows restaurant owner/staff to create/store/manage table reservations",
      imgUrl: PT,
      link: "https://github.com/LevGordon/Restaurant-Reservation-app",
      status: "complete",
    },
    {
      title: "E-commerce Headphone Store",
      description:
        "A full stack application used for selling products. Made with Next.js, Sanity.io and Stripe for payments.",
      imgUrl: SS,
      link: "https://github.com/LevGordon/stripe-shop",
      status: "complete",
    },
    {
      title: "GPT-3 AI website with Figma design",
      description:
        "A front-end static website coded based on an existing Figma design. Made with React.js and standard CSS to comply with figma.",
      imgUrl: FD,
      link: "https://github.com/LevGordon/GPT3-AI-figma",
      status: "complete",
    },
    {
      title: "Medium Blog Knock-off",
      description:
        "Full-stack application written with Next.js, Typescript, Tailwind CSS and Sanity.io as a CMS that allows somebody to write and display articles.",
      imgUrl: MBK,
      link: "https://github.com/LevGordon/next-sanity-mediumblog",
      status: "complete",
    },
    {
      title: "TRVL Agency",
      description:
        "A frontend, mock, multi-page website that displays travel destinations and offers travelling services.",
      imgUrl: TRVL,
      link: "https://github.com/LevGordon/Travel-Website-React",
      status: "complete",
    },
    {
      title: "Personal Portfolio",
      description:
        "Lev Gordon's personal potfolio with React and Bootstrap (you are looking at it)",
      imgUrl: PP,
      link: "https://github.com/LevGordon/LevGordon-personal-portfolio",
      status: "complete",
    }
  ];

  const projects2 = [
    {
      title: "Red Morrow Band",
      description:
        "Frontend multi-page website made with React to showcase a rock band and allows their fans to access music/info about them",
      imgUrl: RM,
      link: "https://github.com/LevGordon/RED-MORROW",
      status: "incomplete",
    },
    {
      title: "We Love Movies",
      description:
        "Backend API and functionality with Node, Express, Knex and PostgreSQL for a website like netflix",
      imgUrl: WLM,
      link: "https://github.com/LevGordon/we-love-movies",
      status: "complete",
    },
    {
      title: "Decoder Ring",
      description:
        "A frontend JS application that allows two parties to encode and later decode messages using 3 different encryption techniques",
      imgUrl: DR,
      link: "https://github.com/LevGordon/Decoder-Ring",
      status: "complete",
    },
  ]

  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility partialVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn"
                      : "not-showing"
                  }
                >
                  <h2>Projects</h2>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <TrackVisibility once partialVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible
                        ? "animate__animated animate__fadeIn"
                        : "not-showing"
                    }
                  >
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab Three</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                )}
              </TrackVisibility>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects1.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>More coming soon</p>
                  <Row>
                  {projects2.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>More coming soon</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
