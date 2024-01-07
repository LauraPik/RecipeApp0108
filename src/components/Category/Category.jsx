import { useParams } from "react-router-dom";

import Button from 'react-bootstrap/Button';

// mapinti 

import Recipe from "../Recipe/Recipe";
import { useState, useEffect } from "react";


const Category = (props) =>{
    const { catName } = useParams();

    const[recipes, setRecipes] = useState([]);//initial state
 

  useEffect( () =>{
    try{
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${catName}`)
      .then(response => response.json())
      .then(data => setRecipes(data.meals))
     

    }catch(msg){
      console.log(msg)
    }
  },[catName])



    return(
    <>
    
    <div className="row">
        Category name: <b>{catName}</b>
        <div>

    {recipes?.map((poste)=>
        
        <Recipe 
        key = {poste.idMeal}
        id = {poste.idMeal}
        img = {poste.strMealThumb}
        title = {poste.strMeal}
        />
         
        ) } 
    </div>
   

    </div>
    </>
         
    )
}

export default Category