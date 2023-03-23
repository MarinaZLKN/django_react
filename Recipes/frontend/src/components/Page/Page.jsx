import React from 'react';
import './Page.css'
import CategoryList from "../CategoryList";
import RecipeList from "../RecipeList/RecipeList";
function Page() {
  return (
    <div className="page">
        <div className="content">
             <CategoryList/>
        </div>
    </div>
  );
}

export default Page;