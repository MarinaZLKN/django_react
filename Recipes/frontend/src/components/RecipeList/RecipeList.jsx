
import React, { useState, useEffect } from "react";
import {useParams} from "react-router";
import axios from 'axios';

const RecipeList = () => {
    const params = useParams();
    const API_URL = 'http://127.0.0.1:8000/api';
    const [data, setData] = useState(null);

   useEffect(() => {
    const fetchData = () => {
      axios.get(`${API_URL}/recipelist/${params.id}`)
        .then((response) => {
            console.log("Hello from recipe")
            console.log(response.data.results)
          setData(response.data.results);
        });
    };
    fetchData();
  }, [params.id]);

  return (
    <ul>
      {data &&
        data.map((recipe) => {
          return (
            <div className="container" key={recipe.id}>
              <h2>
                <div key={recipe.category}>
                  {recipe.title}
                </div>
              </h2>
              <h3>{recipe.description}</h3>

            </div>
          );
        })}
    </ul>
  );
};

export default RecipeList;