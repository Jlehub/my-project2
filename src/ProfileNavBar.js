import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';  
import './ProfileNavBar.css';

const ProfileNavBar = () => {
  const navigate = useNavigate();  

  const handleSignOut = () => {
    console.log('Sign Out');
    navigate('/');  
  };

  return (
    <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="/">Ballers Club</Navbar.Brand>
        <Navbar.Toggle aria-controls="profile-navbar-nav" />
        <Navbar.Collapse id="profile-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#your-progress">Your Progress</Nav.Link>
            <Nav.Link href="#join-chat">Join the Chat</Nav.Link>
            <Nav.Link href="/BookACourt">Book a Court</Nav.Link>
            <Nav.Link href="/BookATraining">Book a Training </Nav.Link>
          </Nav>
          <Button variant="outline-danger" onClick={handleSignOut}>Sign Out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ProfileNavBar;
