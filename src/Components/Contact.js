import React, {useRef, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import emailjs from "@emailjs/browser";
import guitarPNG from '../assets/imgs/guitar.png'
import laptopPNG from '../assets/imgs/laptop.png'
import videoEdit from '../assets/imgs/vid-edit.png'


const SERVICE = process.env.REACT_APP_EMAILJS_SERVICE
const TEMPLATE = process.env.REACT_APP_EMAILJS_TEMPLATE
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

function Contact() {


    const [buttonText, setButtonText] = useState('Send')
    const [message, setMessage] = useState()
    const [emailSent, setEmailSent] = useState(false)
    const [userIsTyping, setUserIsTyping] = useState(false)

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
            setMessage("Email successfully sent!")

        }, 1500)

    }

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const messageRef = useRef();

    const formValidation = (e) => {
        e.preventDefault()

        if (!firstNameRef.current.value || !lastNameRef.current.value || !emailRef.current.value || !messageRef.current.value) {
            setMessage("ERROR: Please fill out all required fields!")
          } else {
            currentlySending(e)
          }
    }

    const animationChange = () => {
        setUserIsTyping(true)
        const timeout = setTimeout(() => {
            setUserIsTyping(false)
        }, 100)

        return () => {
            clearTimeout(timeout)
        }
    }
  
  return (
    <section className='contact' id='contact'>
        <Container>
            <Row className='d-flex align-items-center'>
                <Col xl={6} className='contact-left'>
                    <Col className={userIsTyping ? 'contact-spinning-circle animation-change' : 'contact-spinning-circle'}>
                        <img className='guitar-img' src={guitarPNG} alt='lev gordon dream guitar' />
                        <img className='laptop-img' src={laptopPNG} alt='lev gordon work laptop' />
                        <img className='video-edit-img' src={videoEdit} alt='lev gordon video editing laptop' />
                        <ul className='contact-ul'>
                            <li>Coding</li>
                            <li>Music</li>
                            <li>Video Editing</li>
                        </ul>
                    </Col>
                    
                </Col>
                <Col xl={6} className='contact-right'>
                    <h2>Get in touch with me!</h2>
                    <form ref={form} onSubmit={formValidation}>
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input ref={firstNameRef} type="text" name="first_name" onChange={animationChange} placeholder="First Name" />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input ref={lastNameRef} type="text" name="last_name" onChange={animationChange} placeholder="Last Name" />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input ref={emailRef} type="email" name="user_email" onChange={animationChange} placeholder="Email" />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input ref={phoneRef} type="tel" name="user_phone" onChange={animationChange} placeholder="Phone Number (optional)" />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <textarea ref={messageRef} row='6' name="message" onChange={animationChange} placeholder="Message" />
                                <button type='submit'><span>{buttonText}</span></button>
                            </Col>
                            {
                                message &&
                                <Col>
                                    <p className={message.includes('ERROR') ? "danger" : "success"}>{message}</p>
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