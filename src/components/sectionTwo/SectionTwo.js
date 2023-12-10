import { Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './sectionTwo.scss';
import first from '../sectionTwo/imgSecTwo/first.png';
import two from '../sectionTwo/imgSecTwo/2.png';
import three from '../sectionTwo/imgSecTwo/3.png';
import clock from '../sectionTwo/imgSecTwo/clock.png';
import user from '../sectionTwo/imgSecTwo/user.png';
import scale from '../sectionTwo/imgSecTwo/scale.png';
import four from '../sectionTwo/imgSecTwo/4.png'
import five from '../sectionTwo/imgSecTwo/5.png'
import six from '../sectionTwo/imgSecTwo/6.png'

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
    <Row className='recipes-container-rowImgFirstLine'>
        <Col xs={12} sm={12} md={4}>
          <div className='recieptBlock'>
            <div className='imageContainer'>
              <img src={first} alt="first img" />
              <div className="miniInformation">
                <div class="info">
                  <div><img src={clock}/></div>
                  <div>10 Mins</div>
                </div>
                <div class="info">
                  <div><img src={user}/></div>
                  <div>2 Serving</div>
                </div>
                <div class="info">
                  <div><img src={scale}/></div>
                  <div>Easy</div>
                </div>
              </div>
            </div>
            <h4>
            Creamy Salad
            </h4>
            <a href="#">View Recipe</a>
          </div>
        </Col>
        <Col xs={12} sm={12} md={4}>

        <div className='recieptBlock'>
            <div className='imageContainer'>
              <img src={two} alt="second img" />
              <div className="miniInformation">
                <div class="info">
                  <div><img src={clock}/></div>
                  <div>15 Mins</div>
                </div>
                <div class="info">
                  <div><img src={user}/></div>
                  <div>3 Serving</div>
                </div>
                <div class="info">
                  <div><img src={scale}/></div>
                  <div>Easy</div>
                </div>
              </div>
            </div>
            <h4>
            Tofu Tomatoes Soup
            </h4>
            <a href="#">View Recipe</a>
          </div>

        </Col>

        <Col xs={12} sm={12} md={4}>

        <div className='recieptBlock'>
            <div className='imageContainerThree'>
              <img class= 'imgThree' src={three} alt="second img" />
              <div className="miniInformationThree">
                <div class="infoThree">
                  <div><img src={clock}/></div>
                  <div>10 Mins</div>
                </div>
                <div class="infoThree">
                  <div><img src={user}/></div>
                  <div>2 Serving</div>
                </div>
                <div class="infoThree">
                  <div><img src={scale}/></div>
                  <div>Easy</div>
                </div>
              </div>
            </div>
            <h4>
            Crunchy Potatoes
            </h4>
            <a href="#">View Recipe</a>
          </div>
        </Col>
    </Row>

    <Row className='recipes-container-rowSecondLine'>
      {/* first -------------________ */}
        <Col xs={12} sm={12} md={4}>
        <div className='recieptBlock'>
            <div className='imageContainerSecond'>
              <img class= 'img' src={four} alt="second img" />
              <div className="miniInformation">
                <div class="info">
                  <div><img src={clock}/></div>
                  <div>25 Mins</div>
                </div>
                <div class="info">
                  <div><img src={user}/></div>
                  <div>2 Serving</div>
                </div>
                <div class="info">
                  <div><img src={scale}/></div>
                  <div>Medium</div>
                </div>
              </div>
            </div>
            <h4>
            Mushroom Soup
            </h4>
            <a href="#">View Recipe</a>
          </div>
        </Col>
      {/* second-------------________ */}
        <Col xs={12} sm={12} md={4}>
        <div className='recieptBlock'>
            <div className='imageContainerSecond'>
              <img class= 'img' src={five} alt="second img" />
              <div className="miniInformation">
                <div class="info">
                  <div><img src={clock}/></div>
                  <div>30 Mins</div>
                </div>
                <div class="info">
                  <div><img src={user}/></div>
                  <div>1 Serving</div>
                </div>
                <div class="info">
                  <div><img src={scale}/></div>
                  <div>Easy</div>
                </div>
              </div>
            </div>
            <h4>
            Raspberry Pancake
            </h4>
            <a href="#">View Recipe</a>
          </div>
        </Col>
{/* three-------------________ */}
        <Col xs={12} sm={12} md={4}>
        <div className='recieptBlock'>
            <div className='imageContainerSecond'>
              <img class= 'img' src={six} alt="second img" />
              <div className="miniInformation">
                <div class="info">
                  <div><img src={clock}/></div>
                  <div>20 Mins</div>
                </div>
                <div class="info">
                  <div><img src={user}/></div>
                  <div>1 Serving</div>
                </div>
                <div class="info">
                  <div><img src={scale}/></div>
                  <div>Medium</div>
                </div>
              </div>
            </div>
            <h4>
            Beef Teriyaki
            </h4>
            <a href="#">View Recipe</a>
          </div>
        </Col>
    </Row>
    </Container>
  );
};

export default Recipes;