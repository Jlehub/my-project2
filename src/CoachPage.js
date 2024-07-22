import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './NavigationBar';
import FooterOne from './FooterOne';
import Coach1 from './assets/coach1.png'; 
import Coach2 from './assets/coach2.png';
import Coach3 from './assets/coach3.png';
import Coach4 from './assets/coach4.png';
import Coach5 from './assets/coach5.png';

const CoachPage = () => {
  return (
    <>
      <Navigationbar />
      <Container className="py-4" style={{ marginTop: '75px' }}>
        <h1 className="text-center mb-4 display-3">Our Coaches</h1>
        <p className="lead text-center mb-5">
          At Ballers Club, we place great importance on the quality of our services, which begins with the quality of our staff. 
          Our coaches have been recruited based on a bachelor's degree, and each has also pursued university studies in their field of expertise.
        </p>
        <Row className="justify-content-center mb-5">
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={Coach1} alt="Coach 1" />
              <Card.Body>
                <Card.Title className="display-6">Coach 1 - Coach Spo</Card.Title>
                <Card.Text className="lead">
                  Specialty: Individual Training<br />
                  Achievements: Certified Personal Trainer, 10 years of experience<br />
                  Notable: Best for personal development and performance sessions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={Coach2} alt="Coach 2" />
              <Card.Body>
                <Card.Title className="display-6">Coach 2 - Coach Kerr</Card.Title>
                <Card.Text className="lead">
                  Specialty: Individual and Group Training<br />
                  Achievements: Renowned coach, has trained several professional athletes<br />
                  Notable: Versatile in individual and group training, suitable for all levels.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={Coach3} alt="Coach 3" />
              <Card.Body>
                <Card.Title className="display-6">Coach 3 - Coach Ham</Card.Title>
                <Card.Text className="lead">
                  Specialty: Team Training<br />
                  Achievements: Coach of the Year, 15 years of experience with university teams<br />
                  Notable: Develops effective and cohesive team strategies.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6} className="mb-5">
            <Card className="h-100">
              <Card.Img variant="top" src={Coach4} alt="Coach 4" />
              <Card.Body>
                <Card.Title className="display-6">Coach 4 - Coach Handy</Card.Title>
                <Card.Text className="lead">
                  Specialty: Physical Conditioning<br />
                  Achievements: Certified in Physical Conditioning, 8 years of experience<br />
                  Notable: Optimal strength and conditioning programs for athletes.
                </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-5">
            <Card className="h-100">
              <Card.Img variant="top" src={Coach5} alt="Coach 5" />
              <Card.Body>
                <Card.Title className="display-6">Coach 5 - Coach Lethal</Card.Title>
                <Card.Text className="lead">
                  Specialty: Shooting<br />
                  Achievements: Former professional player, 5-time league champion<br />
                  Notable: Expertise in advanced shooting techniques and accuracy.
                </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <FooterOne />
    </>
  );
};

export default CoachPage;
