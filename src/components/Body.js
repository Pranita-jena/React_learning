
import React from "react";
import reslist from "../utils/mockData";
import ResturantCard from "./ResturantCard";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="resto-container">
                {reslist.map((resturant) => (<ResturantCard key={resturant.info.id} resData={resturant} />))}
            </div>
        </div>       
    );
}

export default Body ;