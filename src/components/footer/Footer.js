import './footer.scss'
import {Container, Row, Col, Nav, Form} from 'react-bootstrap';
import logo from '../header/img/logo.png'
import Button from 'react-bootstrap/Button';

function Footer() {
    return (   
<Container className='container'>
    <Row className='container-rowOne'>

        <Col><div className='container-footer-logo'
          href="#home"><img src={logo}/>Recipedia</div></Col>

    </Row>
<Row className='container-rowTwo'>
<Col>

    <Row className='container-rowTHree'>
{/* Menu column start */}
        <Col> 
                <h4 className='container-rowTHree-title'>Menu</h4>
            <Nav className="flex-column">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Recipe</Nav.Link>
            <Nav.Link href="#">Comunity</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            </Nav>

    
        </Col>

{/* Menu column end  / Categories*/}
     <Col>
            <h4>Categories</h4>
        <Nav className="flex-column">
        <Nav.Link href="#">Breakfast</Nav.Link>
        <Nav.Link href="#">Lunch</Nav.Link>
        <Nav.Link href="#">Dinner</Nav.Link>
        <Nav.Link href="#">Dessert</Nav.Link>
        <Nav.Link href="#">Drink</Nav.Link>
        </Nav>
        
    </Col>

{/* Social column */}

    <Col>
        
            <h4>Social</h4>
        <Nav className="flex-column">
        <Nav.Link href="#">Instagram</Nav.Link>
        <Nav.Link href="#">Twitter</Nav.Link>
        <Nav.Link href="#">Youtube</Nav.Link>
        <Nav.Link href="#">Facebook</Nav.Link>
      
    </Nav>
    </Col>
{/* Social column end  */}

</Row>
      
</Col>

{/* Registracijos forma */}
        <Col className=''>
            <h4>Sign up for our newsletter</h4>
            <div className='d-flex'>
            <Form.Control plaintext  placeholder="Your Email Address" />
        <Button variant="warning">Submit</Button>{' '}
            </div>
        </Col>
      </Row>
    </Container>

     );
}

export default Footer;