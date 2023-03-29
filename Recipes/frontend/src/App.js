import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Home from'./components/Home'
import RecipeList from "./components/RecipeList/RecipeList";
import Recipe from "./components/Recipe/Recipe";
import { Route, Routes, Link} from "react-router-dom";

function App() {
    return (
                <div className="container-main">
                    <Header/>
                    <div className="page">
                        <div className="content">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/" element = {<Home />} />
                        <Route path="/category/:category_id" element = {<RecipeList />} />
                        <Route path="/recipe/:id" element = {<Recipe />} />
                    </Routes>
                        </div>
                    </div>
                </div>
    );
}



export default App;