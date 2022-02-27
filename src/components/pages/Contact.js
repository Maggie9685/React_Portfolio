import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      <h1 data-testid="h1tag">Contact</h1>
    
      <Form>
        <div className="row">
          <Form.Group className="col-12" controlId="formGridName" onSubmit={handleSubmit}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" defaultValue={name} onBlur={handleChange} />
          </Form.Group>

          <Form.Group className="col-12" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" defaultValue={email} onBlur={handleChange} />
          </Form.Group>

          <Form.Group className="col-12" controlId="formGridMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control type="text" placeholder="Messages" defaultValue={message} onBlur={handleChange}/>
          </Form.Group>
        

        {errorMessage && (
                <div className="col-12">
                  <p className="error-text">{errorMessage}</p>
                </div>
        )}

        <Button variant="primary" type="submit">
          Submit
        </Button>
        </div>
      </Form>
  </section>
  );
}

export default Contact;
