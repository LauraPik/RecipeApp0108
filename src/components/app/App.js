import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Search from '../search/Search'
import { useState, useEffect } from 'react'

import Header from "../header/Header";
import Recipes from '../Recipes/Recipes';
import Footer from '../footer/Footer';
import Recipe from '../Recipe/Recipe'
import Promo from '../Promo/Promo'

// liftinimas

function App() {

  


  return (
    <div className="App">
      <Header/>
      <Promo />
      <Search />
      <Recipes />

      <Footer />
    </div>
  );
}

export default App;
