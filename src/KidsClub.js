import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Navigationbar from './NavigationBar'; 
import FooterOne from './FooterOne'; 
import './KidsClub.css';
import game from './assets/game.png';
import gameroom from './assets/gameroom.png';

const KidsClub = () => {
  return (
    <>
      <Navigationbar />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={12}>
            <h1 className="kids-club-title text-center">Kids Club</h1>
            <p className="kids-club-text">
              Our Kids Club offers a dedicated play area for children with video games, books, and small attractions. 
              This section is monitored at all times to ensure the safety of all participants.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col md={6} className="mb-4">
            <Image src={gameroom} alt="Kids Club Image 1" fluid className="kids-club-image" />
          </Col>
          <Col md={6} className="mb-4">
            <Image src={game}alt="Kids Club Image 2" fluid className="kids-club-image" />
          </Col>
        </Row>
      </Container>
      <FooterOne />
    </>
  );
}

export default KidsClub;
