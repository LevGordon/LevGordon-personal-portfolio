import React, {useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import guitarPNG from '../assets/imgs/guitar.png'

function Banner() {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ['JavaScript Developer', 'React.js Developer', 'Node.js Developer', 'Rock Musician']
  const [text, setText] = useState('')
  const period = 2000
  const [delta, setDelta] = useState(300 - Math.random() * 100)


  useEffect(() => {
    let ticker = setInterval(() => {
      tick()

    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])


  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, fullText.length + 1)

    setText(updatedText)

    if(isDeleting) {
      setDelta(prevDelta => prevDelta / 1.6)
    }

    if(!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if(isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }




  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my Portfolio</span>
              <h1>{`Hi, I'm Lev Gordon -`}</h1>
              <h1 className='wrap'>{'a '}{text}</h1>
            <p>lorem ipsum</p>
            <button onClick={() => console.log('connect')}>Let's Connect!<ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={guitarPNG} alt='' />
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}

export default Banner