import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navigationbar from './NavigationBar';
import FooterOne from './FooterOne';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const LogIn = () => {
  const navigate = useNavigate();

  
  const handleSignUpRedirect = () => {
    navigate('/SignIn'); 
  };

  
  const handleLoginSubmit = () => {
   
    navigate('/ProfilePage');
  };

  return (
    <>
      <Navigationbar />
      <Container className="sign-in-container">
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="text-center mb-4">Login</h2>
            <Form onSubmit={handleLoginSubmit}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
              </Form.Group>
              <Button variant="primary" type="submit" className="btn-sign-in">
                Login
              </Button>
              <Button variant="link" onClick={handleSignUpRedirect}>
                Create an account
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <FooterOne />
    </>
  );
};

export default LogIn;
