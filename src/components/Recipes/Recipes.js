import { Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './sectionTwo.scss';
import first from '../Recipes/imgSecTwo/first.png';
import clock from '../Recipes/imgSecTwo/clock.png';
import user from '../Recipes/imgSecTwo/user.png';
import scale from '../Recipes/imgSecTwo/scale.png';

// mapinti 

const Recipes = () => {

  
  return (

    <Container container className='recipes-container'>
    <Row>
        <Col className='recipes-container-row description'>
            <h4>Discover, Create, Share</h4>
            <p>Check our most popular recipes of this week</p>
        </Col>
        <Col className='recipes-container-row-btn'>
        <div id="btn">
        <Button variant="warning">See All</Button>{' '}</div>
        </Col>
    </Row>

    </Container>
  );
};

export default Recipes;