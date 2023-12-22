import Recipe from "../Recipe/Recipe";
import { useState, useEffect } from "react";

const Search = () =>{

    const[recipe, setRecipes] = useState([]);//initial state

  useEffect( () =>{
    try{
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
      .then(response => response.json()
      .then(data => setRecipes(data))
      )

    }catch(msg){
      console.log(msg)
    }
  },[])

    return(
    <>
    
    <div className="container">
    <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Find recipes" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <button className="btn btn-warning" type="button" id="button-addon2">Search</button>
    </div>
    </div>
    <Recipe />
    </>
         
    )
}

export default Search