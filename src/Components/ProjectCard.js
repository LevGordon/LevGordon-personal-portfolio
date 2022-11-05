import React from 'react'
import { Col } from 'react-bootstrap'

import TrackVisibility from 'react-on-screen'

function ProjectCard({title, description, imgUrl, link, status}) {
    return (
      <Col size={12} sm={6} md={4} className='project-cards-Col'>
              <TrackVisibility>
                    {({ isVisible }) => 
                        <div className={isVisible ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'} >
        <a href={link} style={{textDecoration: "none", color: "white"}} target='_blank' rel='noreferrer noopener'>

        <div className="proj-imgbx">
          <div className={status === "complete" ? 'proj-imgbx-img-complete' : 'proj-imgbx-img-incomplete'}>
            <img src={imgUrl} alt={`Lev Gordon ${title}`}/>
          </div>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
        </a>
        </div>}
                    </TrackVisibility>
      </Col>
    )
}

export default ProjectCard