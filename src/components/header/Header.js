import './header.scss'
import {Container, Nav , Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import logo from '../header/img/logo.png'

function Header() {
    return (
        <Navbar  data-bs-theme="light">
        <Container className='navBar-container'>

          <Navbar.Brand className='navBar-container--logo'
          href="#home"><img src={logo}/>Recipedia</Navbar.Brand>
          <Nav className="navBar-container-links">
            <Nav.Link href="#home" className='navBar-container-home--link'>Home</Nav.Link>
            <Nav.Link href="#recipe" className='navBar-container-recipe--link'>Recipe</Nav.Link>
            <Nav.Link href="#community" className='navBar-container-community--link'>Community</Nav.Link>
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