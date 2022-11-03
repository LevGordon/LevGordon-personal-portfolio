import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import navicon1 from '../assets/imgs/nav-icon1.svg';
import navicon2 from '../assets/imgs/nav-icon2.svg';
import navicon3 from '../assets/imgs/nav-icon3.svg';


function Footer() {
  return (
    <footer>
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <h1> Lev Gordon</h1>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social icon">
              <a
                href="https://www.linkedin.com/in/lev-j-gordon/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={navicon1} alt="lev gordon linkedin profile" />
              </a>
              <a
                href="https://www.facebook.com/Lev.Gordonsa/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={navicon2} alt="lev gordon facebook profile" />
              </a>
              <a
                href="https://www.instagram.com/lev_gordon/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={navicon3} alt="lev gordon instagram profile" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
