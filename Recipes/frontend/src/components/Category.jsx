import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
const url = 'http://127.0.0.1:8000/api/categorylist/';
const Category = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);



  return (
      <div> hello </div>

  );
};

export default Category;