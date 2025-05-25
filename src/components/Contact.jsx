import React,{ useState } from 'react'
import './Contact.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="main-container">
      <div className='sub-container w-100 d-flex flex-column align-items-center justify-content-center  '>
        <div className='form-container'>
        <h1 className='form-title'>Get in Touch</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="validateName">
        <Form.Floating>
          <Form.Control required type="text" placeholder="Your Name" />
          <label htmlFor="validateName">Enter Your Name</label>
        </Form.Floating>
        </Form.Group>

        <Form.Group controlId="validateEmail">
        <Form.Floating>
          <Form.Control required type="email" placeholder="E mail" />
          <label htmlFor="validateEmail">Enter Your E-mail ID</label>
        </Form.Floating>
        </Form.Group>

        <Form.Group controlId="validateMessage">
        <Form.Floating >
          <Form.Control required as="textarea" placeholder="Leave a message here" />
          <label htmlFor="validateMessage">Please Leave a Message</label>
        </Form.Floating>
        </Form.Group>

        <Form.Floating  className='d-flex justify-content-center'>
          <Button className='m-0'>Send</Button>
        </Form.Floating>
        </Form>
      </div>
      </div>
    </div>
  )
}

export default Contact