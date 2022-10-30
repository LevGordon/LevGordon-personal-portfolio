import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import css from '../assets/imgs/css-3.svg'
import knex from '../assets/imgs/knex.svg'
import git from '../assets/imgs/git-icon.svg'
import html from '../assets/imgs/html-5.svg'
import javascript from '../assets/imgs/javascript.svg'
import nodejs from '../assets/imgs/nodejs-icon.svg'
import npm from '../assets/imgs/npm-icon.svg'
import postgresql from '../assets/imgs/postgresql.svg'
import react from '../assets/imgs/react.svg'

function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


  return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                <div className='skill-bx'>
                    <h2> Skills </h2>
                    <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        <div className='item'>
                            <img src={javascript} alt='' />
                            <h5>JavaScript</h5>
                        </div>
                        <div className='item'>
                            <img src={react} alt='' />
                            <h5>React.js</h5>
                        </div>
                        <div className='item'>
                            <img src={nodejs} alt='' />
                            <h5>Node.js</h5>
                        </div>
                        <div className='item'>
                            <img src={knex} alt='' />
                            <h5>Express.js / Knex.js</h5>
                        </div>
                        <div className='item'>
                            <img src={html} alt='' />
                            <h5>HTML</h5>
                        </div>
                        <div className='item'>
                            <img src={css} alt='' />
                            <h5>CSS</h5>
                        </div>
                        <div className='item'>
                            <img src={postgresql} alt='' />
                            <h5>PostgreSQL</h5>
                        </div>
                        <div className='item'>
                            <img src={npm} alt='' />
                            <h5>NPM</h5>
                        </div>
                        <div className='item'>
                            <img src={git} alt='' />
                            <h5>Git</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        

    </section>
  )
}

export default Skills