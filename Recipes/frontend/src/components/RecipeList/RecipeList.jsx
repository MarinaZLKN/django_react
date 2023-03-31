
import React, { useState, useEffect } from "react";
import {useParams} from "react-router";
import axios from 'axios';
import {Link} from "react-router-dom";
import './ReccipeList.css'

const RecipeList = () => {
    const params = useParams();
    const [data, setData] = useState(null);

   useEffect(() => {
    const fetchData = () => {
      axios.get(`http://127.0.0.1:8000/api/category/${params.category_id}/recipelist`)
        .then((response) => {
          setData(response.data);
        });
    };
    fetchData();
  }, [params.category_id]);

  return (
    <div className="recipe-title">
        <label>Список рецептов:</label>
        <ul>
            {data && data.map((recipe) => {
                return (
                    <div className="container" key={recipe.id}>
                        <h2>
                            <div key={recipe.category}>
                                <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                            </div>
                        </h2>
                    </div>
                    );
            })}
        </ul>
    </div>
  );
};

export default RecipeList;