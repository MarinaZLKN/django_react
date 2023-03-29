import React, {useEffect, useState} from 'react';
import { useParams } from "react-router";
import axios from 'axios';

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
        });
    };

    fetchRecipe();
  }, [params.id]);

  return (
    <div>
        // TODO
    </div>
  );
};

export default Recipe;