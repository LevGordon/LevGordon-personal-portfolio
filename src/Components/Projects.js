import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import ProjectCard from './ProjectCard'

function Projects() {

    const projects = [
        { title: 'Restaurant Reservation App',
        description: 'A full-stack application built with Node, Express, Knex and React',
        imgUrl: ''

        },
         {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: 'projImg2',
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: 'projImg3',
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: 'projImg1',
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: 'projImg2',
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: 'projImg3',
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
                            <p>Lorem Ipsum</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey='third'>
                            <p>Lorem Ipsum</p>
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