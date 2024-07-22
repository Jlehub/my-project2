import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navigationbar from './NavigationBar';
import FooterOne from './FooterOne';
import background from './assets/background.png';
import './DailyAccess.css'; 

const DailyAccess = () => {
  return (
    <>
      <Navigationbar />
      <Container className="daily-access-container">
        <h2 className="daily-access-title text-center mb-4">Daily Access Passes</h2> 
        <Row className="justify-content-center mb-4">
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card className="daily-access-card bg-dark text-white">
              <Card.Img src={background} alt="Daily Access 1" className="daily-access-card-img" />
              <Card.ImgOverlay className="daily-access-card-overlay">
                <Card.Title className="daily-access-card-title">Single Activity Access</Card.Title>
                <Card.Text className="daily-access-card-text">
                  Enjoy access to one activity of your choice for the day. Perfect for a quick workout or a focused training session.
                </Card.Text>
                <Card.Text className="daily-access-card-text">20$</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card className="daily-access-card bg-dark text-white">
              <Card.Img src={background} alt="Daily Access 2" className="daily-access-card-img" />
              <Card.ImgOverlay className="daily-access-card-overlay">
                <Card.Title className="daily-access-card-title">Two Activities Access</Card.Title>
                <Card.Text className="daily-access-card-text">
                  Access to any two activities for the day. Mix and match to make the most of your training and leisure time.
                </Card.Text>
                <Card.Text className="daily-access-card-text">35$</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={12} className="d-flex justify-content-center mb-4">
            <Card className="daily-access-card bg-dark text-white">
              <Card.Img src={background} alt="Daily Access 3" className="daily-access-card-img" />
              <Card.ImgOverlay className="daily-access-card-overlay">
                <Card.Title className="daily-access-card-title">All Activities Access</Card.Title>
                <Card.Text className="daily-access-card-text">
                  Unlimited access to all our activities for the entire day. Enjoy a comprehensive experience at our facilities.
                </Card.Text>
                <Card.Text className="daily-access-card-text">50$</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <h2 className="text-center pt-3 mb-4"> Students get a 15% discount on all Accesses</h2>
      </Container>
      <FooterOne />
    </>
  );
}

export default DailyAccess;
