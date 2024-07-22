import Form from 'react-bootstrap/Form';
import { Container, Button} from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import FooterOne from './FooterOne';
import './index.css';

const Contact = () => {
    return (  
        <div className="Contact">
            
            <NavigationBar />
            
            <Container className="mt-5">
                <h1 className="text-center mb-4">CONTACT US</h1>
                <Form>
                    <Form.Group className="mb-4" controlId="formFullName">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your full name" className="large-input" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="(225)-225-2225" className="large-input" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formEmailAddress">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" className="large-input" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formTextarea">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={6} className="large-textarea" />
                    </Form.Group>
                    <Button  type="submit" className="btn-send">
                        Send
                    </Button>
                </Form>
            </Container>
            
            
        <FooterOne />
            
        </div>


    );
}
 
export default Contact;