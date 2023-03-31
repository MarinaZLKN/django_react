import React, {useEffect, useState} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import './Recipe.css'


//TODO
// const Recipe = ( {id} ) => {
const Recipe = ( ) => {
    const params = useParams();
    const [recipe, setRecipe] = useState(null);

   useEffect(() => {
    const fetchRecipe = () => {
      axios.get(`http://127.0.0.1:8000/api/recipe/${params.id}`)
        .then((response) => {
          setRecipe(response.data);
          console.log(response.data)
        });
    };

    fetchRecipe();
  }, [params.id]);


  return (
      recipe && (
          <div className="recipe-detail">
              <div className="recipe-text">ИНСТРУКЦИЯ ПРИГОТОВЛЕНИЯ:</div>
              <label>{recipe.description}</label>
          </div>
      )

  );
};

export default Recipe;
