import { Container, Row, Col} from 'react-bootstrap';
import './Recipe.scss';
import clock from '../Recipes/imgSecTwo/clock.png';
import user from '../Recipes/imgSecTwo/user.png';
import scale from '../Recipes/imgSecTwo/scale.png';
import Search from '../search/Search';
import { Link } from 'react-router-dom';


const Recipe = (props) =>{

    return(
        <>
        <Col xs={12} sm={12} md={4}>

          <div className='recieptBlock'>

            <div className='imageContainer'>

              <img src={props.img} alt="first img" />
              
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
            {props.title}
            </h4>
            <Link className="" to={`/Recipes/${props.id}`}>View Recipe</Link>
          </div>
        </Col>
        </>
    )
}

export default Recipe