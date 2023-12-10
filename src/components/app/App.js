import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import Header from "../header/Header";
import SectionOne from "../sectionOne/SectionOne";
import Recipes from '../sectionTwo/SectionTwo';
import Footer from '../footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <SectionOne/>
      <Recipes/>
      <Footer/>
    </div>
  );
}

export default App;
