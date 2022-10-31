import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import DR from '../assets/imgs/projects/DR.png'
import PP from '../assets/imgs/projects/PP.png'
import PT from '../assets/imgs/projects/PT.png'
import RM from '../assets/imgs/projects/RM.png'
import TRVL from '../assets/imgs/projects/TRVL.png'
import WLM from '../assets/imgs/projects/WLM.png'

function Projects() {

    const projects = [
         {  
            title: 'Restaurant Reservation App',
            description: 'A full-stack application built with Node, Express, Knex and React that allows restaurant owner/staff to create/store/manage table reservations',
            imgUrl: PT
         },
         {
            title: "Red Morrow Band",
            description: "Frontend multi-page website made with React to showcase a rock band and allows their fans to access music/info about them",
            imgUrl: RM,
          },
          {
            title: "TRVL Agency",
            description: "A frontend multi-page website that displays travel destinations and offers travelling services.",
            imgUrl: TRVL,
          },
          {
            title: "We Love Movies",
            description: "Backend API / validation / functionality with Node, Express, Knex and PostgreSQL for a website like netflix",
            imgUrl: WLM,
          },
          {
            title: "Personal Portfolio",
            description: "Lev Gordon's personal potfolio with React (you are looking at it)",
            imgUrl: PP,
          },
          {
            title: "Decoder Ring",
            description: "A frontend JS application that allows two parties to encode and later decode messages using 3 different encryption techniques",
            imgUrl: DR,
          },
    ]




  return (
    <section className='project' id='project'>
        <Container>
            <Row>
                <Col size={12}>
                    <h2>Projects</h2>
                    <p>Lorem Ipsum</p>
                    <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey='first'>Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='second'>Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='third'>Tab Three</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey='first'>
                            <Row>
                                {projects.map((project, index) => {
                                    return (
                                        <ProjectCard 
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })}
                            </Row>

                        </Tab.Pane>
                        <Tab.Pane eventKey='second'>
                            <p>More coming soon</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey='third'>
                            <p>More coming soon</p>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        
    </section>
  )
}

export default Projects