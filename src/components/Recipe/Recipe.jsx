import { Container, Row, Col} from 'react-bootstrap';
import first from '../Recipes/imgSecTwo/first.png';
import clock from '../Recipes/imgSecTwo/clock.png';
import user from '../Recipes/imgSecTwo/user.png';
import scale from '../Recipes/imgSecTwo/scale.png';


const Recipe = (props) =>{
    return(
        <>
    <Container container className='recipes-container'>
    <Row className='recipes-container-rowImgFirstLine'>
        <Col xs={12} sm={12} md={4}>

          <div className='recieptBlock'>

            <div className='imageContainer'>

              <img src={first} alt="first img" />
              <div className="miniInformation">

                {/* Informacijos kortele nuotraukoje */}
                <div className="info">
                  <div><img src={clock}/></div>
                  <div>10 Mins</div>
                </div>
                <div className="info">
                  <div><img src={user}/></div>
                  <div>2 Serving</div>
                </div>
                <div className="info">
                  <div><img src={scale}/></div>
                  <div>Easy</div>
                </div>
              </div>
            </div>
            {/* Info korteles pabaiga */}
            
            <h4>
            Creamy Salad
            </h4>
            <a href="#">View Recipe</a>
          </div>
        </Col>
        
    </Row>
    </Container>
        </>
    )
}

export default Recipe