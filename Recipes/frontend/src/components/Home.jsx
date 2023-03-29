import CategoryList from "./CategoryList";
import React from "react";

function Home() {
    const pic = '../public/img/banner.jpg.webp';
    const picture = 'picture';

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