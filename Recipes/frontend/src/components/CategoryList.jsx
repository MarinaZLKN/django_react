import React, { useState, useEffect } from "react";
import './CategoryList.css';
const pic = 'img/image.jpg'
const url = 'http://127.0.0.1:8000/api/categorylist/';

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
        <div className="container">
          {data &&
            data.map((category) => {
              return (
                <div  key={category.id}>
                  <h1>
                    <div key={category.id}>
                      {category.name}
                      <div className="pic">
                        <img className="image" src={pic}/>
                      </div>
                    </div>
                  </h1>

                </div>
              );
            })}
        </div>
      );
};

export default CategoryList;