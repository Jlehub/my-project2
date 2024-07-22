import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import player from './assets/player.png'; 
import Activities from './Activities';

const HomePage = () => {
  return (
    <div className="HomePage">
      <h1 className="main-title">WELCOME ON BALLERS CLUB WEBSITE!</h1>
      <p>Ready to play ball ?</p>
      
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <img src={player} alt="court" className="img-fluid" />
          </Col>
          <Col md={6}>
            <div className="description">
              <h2>Our Vision</h2>
              <p>
              Welcome to Ballers Club, where we share our love for the game with all basketball enthusiasts. 
              Our team is dedicated to providing exceptional services, whether it’s for technical advice, personalized training, or special events. 
              Come discover our unique approach and let us help you achieve your goals on the court. Our owner, a true basketball lover, will warmly welcome you and share his enthusiasm and passion for this extraordinary sport.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className='mt-5'>
          <h2 className="text-center mb-4">What We Offer</h2>
          <Row className="justify-content-center">
            <Col md={10}>
              <p>
                At Ballers Club, we provide a comprehensive range of services to cater to all your basketball needs. Whether you're looking to hone your skills with personalized training or enjoy the camaraderie of group sessions, we have you covered. Our experienced coaches are here to guide you every step of the way, ensuring you get the most out of every practice.
              </p>
              <p>
                Our state-of-the-art facilities include a pristine swimming pool, perfect for post-training relaxation and recovery. For those looking to build strength and endurance, our fully equipped gym offers everything you need to stay in peak condition. And for families, we offer a dedicated kids' area where young ones can learn the basics of basketball in a fun and safe environment.
              </p>
              <p>
                We pride ourselves on creating a welcoming and supportive atmosphere where every player can thrive. Join us at Ballers Club and experience top-notch facilities, expert coaching, and a community that shares your passion for the game.
              </p>
            </Col>
          </Row>
        </Container>

      <Activities/>

      <Container className='mt-5'>
        <h2 className="text-center mb-4">Reviews</h2> 
        <Carousel>
          <Carousel.Item>
            <div className="review-item">
              <p className="d-block w-100 text-center">"Ballers Club is the best place to improve your game. The coaches are amazing!" - Michael Jordan</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="review-item">
              <p className="d-block w-100 text-center">"I loved the personalized training sessions. My skills have improved tremendously." - LeBron James</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="review-item">
              <p className="d-block w-100 text-center">"A fantastic community for basketball lovers. Highly recommend!" - Kobe Bryant</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default HomePage;
