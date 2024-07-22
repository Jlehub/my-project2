import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navigationbar from './NavigationBar';
import FooterOne from './FooterOne'; 
import { useNavigate } from 'react-router-dom';  
import './SignIn.css';

const SignIn = () => {
  const navigate = useNavigate();  

  const handleSignUp = (e) => {
    e.preventDefault(); 
    navigate('/Profilepage'); 
  };

  return (
    <>
      <Navigationbar />
      <Container className="sign-in-container">
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form onSubmit={handleSignUp}>  
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your first name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your last name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Enter your age" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formHeight">
                <Form.Label>Height</Form.Label>
                <Form.Control type="text" placeholder="Enter your height" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formProfession">
                <Form.Label>Profession</Form.Label>
                <Form.Control type="text" placeholder="Enter your profession" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
              </Form.Group>
              <Button variant="primary" type="submit" className="btn-sign-in">
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <FooterOne />
    </>
  );
};

export default SignIn;
