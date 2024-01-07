import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const RecipeInformation = (props) =>{
    const { id } = useParams();
    
    const[recipes, setRecipes] = useState([]);//initial state
    
  
    useEffect( () =>{
      try{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(data => setRecipes(data.meals))
       
  
      }catch(msg){
        console.log(msg)
      }
    },[id])
    

    
    console.log(recipes[0])
  
   return(
        <>
        
        <div className="container">
            {recipes.length>0?( 
                recipes.map((item,index)=>< div className="row">
                    <div className="col"><img width={500} src={item.strMealThumb}alt={item.strMeal} />
                    <div>Link to a video:<a href={item.strYoutube}>click me!</a> </div>
                    </div>
                    <div className="col"><h3>{item.strMeal}</h3>
                    <ul>
                      <li>{item.strMeasure1} {item.strIngredient1}</li>
                      <li>{item.strMeasure2} {item.strIngredient2}</li>
                      <li>{item.strMeasure3} {item.strIngredient3}</li>
                      <li>{item.strMeasure4} {item.strIngredient4} </li>
                      <li>{item.strMeasure5} {item.strIngredient5} </li>
                      <li> {item.strMeasure6} {item.strIngredient6} </li>
                      <li>{item.strMeasure7} {item.strIngredient7} </li> 
                      <li>{item.strMeasure8} {item.strIngredient8} </li> 
                      <li>{item.strMeasure9} {item.strIngredient9}</li> 
                      <li>{item.strMeasure10} {item.strIngredient10} </li>
                      <li>{item.strMeasure11} {item.strIngredient12} </li>
                      <li>{item.strMeasure13} {item.strIngredient13} </li>
                      <li>{item.strMeasure14} {item.strIngredient14} </li>
                      <li>{item.strMeasure15} {item.strIngredient15} </li>
                      <li>{item.strMeasure16} {item.strIngredient16} </li>
                      <li>{item.strMeasure17} {item.strIngredient17} </li>        
                    </ul>
                    <p>{item.strInstructions}</p>
                    </div>
                    

                    

                    </div>
                )
            
                ):(
                    <p>No recipes</p>

                )}
        </div>
            
        </>
    )
}

export default RecipeInformation