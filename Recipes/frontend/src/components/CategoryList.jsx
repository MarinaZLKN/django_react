import React, { useState, useEffect } from "react";
const url = 'http://127.0.0.1:8000/api/categorylist/'
const CategoryList = () => {

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
            data.map((category) => {
              return (
                <div className="container" key={category.id}>
                  <h1>
                    <div key={category.id}>
                      {category.name}
                    </div>
                  </h1>

                </div>
              );
            })}
        </ul>
      );
};

export default CategoryList;