import CategoryList from "./CategoryList";
import React from "react";
import pic from '../img/banner.jpg.webp';
const picture = 'picture';
function Home() {

    return (
        <div className="content">
            <div className="pic">
                <img className="image" alt={picture} src={pic}/>
            </div>
            <CategoryList/>
        </div>
    )
}

export default Home;