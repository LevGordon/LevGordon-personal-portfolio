import React, {useRef, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import emailjs from "@emailjs/browser";
import guitarPNG from '../assets/imgs/guitar.png'


const SERVICE = process.env.REACT_APP_EMAILJS_SERVICE
const TEMPLATE = process.env.REACT_APP_EMAILJS_TEMPLATE
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

function Contact() {


    const [buttonText, setButtonText] = useState('Send')
    const [message, setMessage] = useState()
    const [emailSent, setEmailSent] = useState(false)

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          SERVICE,
          TEMPLATE,
          form.current,
          PUBLIC_KEY,
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
            setMessage(error.text)
          }
        );
    };


    const currentlySending = (e) => {
        e.preventDefault()

        setButtonText('Sending...')
        setTimeout(() => {
            console.log("CURRENT FORM:", form.current)
            sendEmail(e)
            setEmailSent(true)
            setButtonText('Send')

        }, 1500)

    }
  
  return (
    <section className='contact' id='contact'>
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <div className='contact-spinning-circle'>
                        <img src={guitarPNG} alt='lev gordon dream guitar' />
                    </div>
                    
                </Col>
                <Col md={6}>
                    <h2>Get in touch with me!</h2>
                    <form ref={form} onSubmit={currentlySending}>
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input type="text" name="first_name" placeholder="First Name" />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="text" name="last_name" placeholder="Last Name" />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="email" name="user_email" placeholder="Email" />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="tel" name="user_phone" placeholder="Phone Number" />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <textarea row='6' name="message" placeholder="Message" />
                                <button type='submit'><span>{buttonText}</span></button>
                            </Col>
                            {
                                message &&
                                <Col>
                                    <p className={message.error ? "danger" : "success"}>{message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
        
    </section>
  )
}

export default Contact