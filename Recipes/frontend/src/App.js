import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import CategoryList from "./components/CategoryList";
import RecipeList from "./components/RecipeList/RecipeList";
import {Routes, Route} from "react-router";


function App() {
    const pic = 'img/banner.jpg.webp'
    const picture = 'picture';
    return (
        <div className="container-main">
            <Header/>
            <Routes>
                <Route path="/api/recipelist/:id" element={<RecipeList/>}/>
            </Routes>
            <div className="page">
                <div className="content">
                    <div className="pic">
                        <img className="image" alt={picture} src={pic}/>
                    </div>
                    <CategoryList/>
                </div>
            </div>
        </div>


    );
}

export default App;
