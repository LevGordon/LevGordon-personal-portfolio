import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'

function Projects() {

    const projects = []




  return (
    <section className='project' id='projects'>
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>Lorem Ipsum</p>
                    <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav>
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
                                {projects.map((project) => {
                                    return (
                                        <p>{project.title}</p>
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