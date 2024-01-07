import { Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './sectionTwo.scss';
// mapinti 

import Recipe from "../Recipe/Recipe";
import { useState, useEffect } from "react";
import Search from '../search/Search';

const Recipes = () => {
  const[recipes, setRecipes] = useState([]);//initial state
  const [search, setSearch] = useState(false);

  useEffect( () =>{
    try{
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`+ search)
      .then(response => response.json())
      .then(data => setRecipes(data.meals))
     

    }catch(msg){
      console.log(msg)
    }
  },[search])

  const handleInputChange = (e)=>{
    setSearch(e.target.value)
}
  
  return (

    <Container className='recipes-container'>
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
    
    <Row>
    <Search onSearch ={handleInputChange}/>

    {recipes?.map((poste)=>
        
        <Recipe 
        key = {poste.idMeal}
        id = {poste.idMeal}
        img = {poste.strMealThumb}
        title = {poste.strMeal}
        />
         
        ) } 
    </Row>
    </Container>
  );
};

export default Recipes;