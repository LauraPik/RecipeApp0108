import './header.scss'
import {Container, Nav , Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from '../header/img/logo.png';

import { Link } from 'react-router-dom';
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown'; 
import { useState, useEffect } from 'react';

function Header() {
  
    const[categories, setCategories] = useState([]);

    useEffect( () => {
        try{
            fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
            .then((response) => response.json())
            .then((data) =>{
                setCategories(data.meals);

            }

            )
        }catch(msg){
            console.log(msg);
        }
    }, []);

    return (
        <Navbar  data-bs-theme="light">
        <Container className='navBar-container'>

          <Navbar.Brand className='navBar-container--logo'
          href="#home"><img src={logo}/>Recipedia</Navbar.Brand>
          <Nav className="navBar-container-links">
            <Link to="/" className='navBar-container-home--link nav-link'>Home</Link>
            <Link to="/Recipes" className='navBar-container-recipe--link nav-link'>Recipe</Link>
            {/* Neaktyvūs */}

          <li className="nav-item dropdown">
            <a className="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </a>
					<ul className="dropdown-menu">
          {categories.map(category => <li key={category.idMeal}><Link className="dropdown-item" to={`/category/${category.strCategory}`}>{category.strCategory}</Link></li>)}
					</ul>
				  </li>

            <Nav.Link href="#about" className='navBar-container-about--link'>About Us</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="#"><FontAwesomeIcon icon={faMagnifyingGlass} /></Nav.Link>
          <Nav.Link href="#"><FontAwesomeIcon icon={faUser} /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }

  export default Header;