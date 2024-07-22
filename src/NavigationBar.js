import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';







const NavigationBar = () => {
    return ( 
        <Navbar  variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">BALLERS CLUB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/CoachPage">COACHES</Nav.Link>
            <NavDropdown title="DEALS" id="basic-nav-dropdown">
              <NavDropdown.Item href="/DailyAccess">DAILY ACCESS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">BECOME A MEMBER</NavDropdown.Item>
              <NavDropdown.Item href="/KidsClub">KIDS CLUB</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">CONTACT US</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/LogIn">
              <i className="fas fa-user"></i> LOGIN </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>









     );
}
 
export default NavigationBar;