import e from 'express'
import React, {useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'

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
    const [status, setStatus] = useState({})

    const onChangeHandler = (category, value) => {
        setFormData({
            ...formData,
            [category] : value
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        setButtonText('Sending...')
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type" : "Application/json;charset=utf-8",
            }, 
            body: JSON.stringify(formData)

        });
        setButtonText("Send")
        let result = response.json()
        setFormData(initialFormState)

        if(result.code === 200) {
            setStatus({success: true, message: 'Message Sent Succesfully '})
        } else {
            setStatus({ success: false, message: 'Something went wrong - please try'})
        }

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
                    <form onSubmit={submitHandler}>
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input type="text" value={formData.first_name} placeholder="First Name" onChange={(e) => onChangeHandler('first_name', e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="text" value={formData.last_name} placeholder="Last Name" onChange={(e) => onChangeHandler('last_name', e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="email" value={formData.email} placeholder="Email" onChange={(e) => onChangeHandler('email', e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="tel" value={formData.number} placeholder="Phone Number" onChange={(e) => onChangeHandler('number', e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <textarea row='6' value={formData.message} placeholder="Message" onChange={(e) => onChangeHandler('message', e.target.value)}/>
                                <button type='submit'><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
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