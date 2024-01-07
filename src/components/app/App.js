

import Header from "../header/Header";
import Recipes from '../Recipes/Recipes';
import RecipeInformation from '../Recipe/RecipeInformation';

import Category from '../Category/Category';
import Footer from '../footer/Footer';
import Promo from '../Promo/Promo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

 

  return (
    <div className="App">
      <Router>

      <Header/>
      <Routes>
        <Route path="/" element={<Promo />}/>
        <Route path ="/Recipes" element={<>
          <Recipes />
        </>}/>
        
        <Route path ="/Recipes/:id" element={<>
          <RecipeInformation />
        </>}/>
        
        <Route path ="/category/:catName" element={<>
          <Category />
        </>}/>
      </Routes>
      

      </Router>
      <Footer />
    </div>
  );
}

export default App;
