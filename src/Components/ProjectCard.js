import React from 'react'
import { Col } from 'react-bootstrap'

function ProjectCard({title, description, imgUrl, link}) {
    return (
      <Col size={12} sm={6} md={4}>
        <a href={link} style={{textDecoration: "none", color: "white"}} target='_blank' rel='noreferrer noopener' >
        <div className="proj-imgbx">
          <img src={imgUrl} alt={`Lev Gordon ${title}`}/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
        </a>
      </Col>
    )
}

export default ProjectCard