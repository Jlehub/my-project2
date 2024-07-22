import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import court2 from './assets/court2.png'; 
import court from './assets/court.png'; 
import court3 from './assets/court3.png'; 
import pool from './assets/pool.png';
import gym from './assets/gym.png';

const Activities = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Activities</h2>
      <Row className="justify-content-center mb-4">
        <Col md={12}>
          <Card className="bg-dark text-white mb-4">
            <Card.Img src={court2} alt="" />
            <Card.ImgOverlay>
              <Card.Title>COURT 1</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="bg-dark text-white mb-4">
            <Card.Img src={court} alt="" />
            <Card.ImgOverlay>
              <Card.Title>COURT 2</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="bg-dark text-white mb-4">
            <Card.Img src={court3} alt="" />
            <Card.ImgOverlay>
              <Card.Title>COURT 3</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="bg-dark text-white mb-4">
            <Card.Img src={pool} alt="" />
            <Card.ImgOverlay>
              <Card.Title>Swimming Pool</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="bg-dark text-white mb-4">
            <Card.Img src={gym} alt="" />
            <Card.ImgOverlay>
              <Card.Title>GYM</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Activities;
