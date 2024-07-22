import React from 'react';
import ProfileNavBar from './ProfileNavBar';
import FooterOne from './FooterOne';
import { Container, Form, Button } from 'react-bootstrap';
import './booking.css';

const BookATraining = () => {
  return (
    <>
      <ProfileNavBar />
      <Container className="mt-5">
        <p className="fs-1 my-5 text-center">Book a Training Session</p>
        <Form>
          <Form.Group className="mb-4" controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formTime">
            <Form.Label>Available Time Slots</Form.Label>
            <Form.Control as="select">
              <option>HH:MM</option>
              <option value="1">10:00 AM</option>
              <option value="2">11:00 AM</option>
              <option value="3">01:30 PM</option>
              <option value="4">02:30 PM</option>
              <option value="5">03:30 PM</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="formProfessional">
            <Form.Label>With</Form.Label>
            <Form.Control as="select">
              <option>Choose a coach</option>
              <option value="1">Coach SPO</option>
              <option value="2">Coach KERR</option>
              <option value="3">Coach HAM</option>
              <option value="4">Coach HANDY</option>
              <option value="5">Coach LETHAL</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="formService">
            <Form.Label>For</Form.Label>
            <Form.Control as="select">
              <option>Service name</option>
              <option value="1">Individual Training</option>
              <option value="2">Group Training</option>
            </Form.Control>
          </Form.Group>
          <p className="fs-5 my-5 text-center">Your Contact Info</p>
          <Form.Group className="mb-4" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Button variant="outline-danger" href="/ProfilePage" className="mb-5">
              CANCEL
            </Button>
            <Button variant="outline-success" href="#confirmation" className="mb-5 ml-3">
              CONFIRM
            </Button>
          </div>
        </Form>
      </Container>
      <FooterOne />
    </>
  );
};

export default BookATraining;
