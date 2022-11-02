import React, {useRef, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import emailjs from "@emailjs/browser";


const SERVICE = process.env.REACT_APP_EMAILJS_SERVICE
const TEMPLATE = process.env.REACT_APP_EMAILJS_TEMPLATE
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

function Contact() {
    const initialFormState = {
        first_name: '',
        last_name: '',
        email: '',
        number: '',
        message: '',
    }

    const [formData, setFormData] = useState(initialFormState)
    const [buttonText, setButtonText] = useState('Send')
    const [message, setMessage] = useState()
    const [emailSent, setEmailSent] = useState(false)

    const onChangeHandler = (category, value) => {
        setFormData({
            ...formData,
            [category] : value
        })
    }

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

        }, 500)



    }


      
  return (
    <section className='contact' id='contact'>
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={''} alt='contact Lev Gordon' />
                </Col>
                <Col md={6}>
                    <h2>Get in touch with me!</h2>
                    <form ref={form} onSubmit={currentlySending}>
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input type="text" name="first_name" value={formData.first_name} placeholder="First Name" onChange={(e) => onChangeHandler('first_name', e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="text" name="last_name" value={formData.last_name} placeholder="Last Name" onChange={(e) => onChangeHandler('last_name', e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="email" name="user_email" value={formData.email} placeholder="Email" onChange={(e) => onChangeHandler('email', e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="tel" name="user_phone" value={formData.number} placeholder="Phone Number" onChange={(e) => onChangeHandler('number', e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <textarea row='6' name="message" value={formData.message} placeholder="Message" onChange={(e) => onChangeHandler('message', e.target.value)}/>
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