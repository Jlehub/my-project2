import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterTwo = () => {
  return (
    <div className="footer-two bg-light">
      <Container>
        <Row>
          <Col md={3} className="text-center">
            <div className="vertical-text">
              <p>B</p>
              <p>A</p>
              <p>L</p>
              <p>L</p>
              <p>E</p>
              <p>R</p>
              <p>S</p>
              <p>C</p>
              <p>L</p>
              <p>U</p>
              <p>B</p>
            </div>
          </Col>
          <Col md={3}>
            <h5>Contact & Hours</h5>
            <p>
              <strong>Address:</strong> 123 Basketball Ave, Hoop City<br />
              <strong>Phone:</strong> (123) 456-7890<br />
              <strong>Email:</strong> info@ballersclub.com
            </p>
            <p>
              <strong>Hours:</strong><br />
              Mon-Fri: 9am - 9pm<br />
              Sat-Sun: 10am - 8pm
            </p>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <div className="social-icons">
              <FaFacebook size={30} className="mr-2" />
              <FaTwitter size={30} className="mr-2" />
              <FaInstagram size={30} />
            </div>
          </Col>
          <Col md={3}>
            <h5>Our Location</h5>
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086698472384!2d-122.0842497!3d37.4219994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e2f8d1c5b9%3A0x0!2z37KwMjUnMjkuMiJOIDEyMsKwMDUnMDkuNyJX!5e0!3m2!1sen!2sus!4v1585858941302!5m2!1sen!2sus"
              width="100%"
              height="200"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="responsive-map"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterTwo;
