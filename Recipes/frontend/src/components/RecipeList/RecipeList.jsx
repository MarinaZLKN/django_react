
import React, { useState, useEffect } from "react";
const url = 'http://127.0.0.1:8000/api/recipelist/'

const RecipeList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data);
        });
    };
    fetchData();
  }, []);

  console.log(data)

  return (
    <ul>
      {data &&
        data.map((recipe) => {
          return (
            <div className="container" key={recipe.id}>
              <h1>
                <div key={recipe.category}>
                  {recipe.title}
                </div>
              </h1>
              <h3>{recipe.description}</h3>

            </div>
          );
        })}
    </ul>
  );
};

export default RecipeList;