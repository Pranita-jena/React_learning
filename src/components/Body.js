

import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
//import reslist from "../utils/mockData";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

useEffect( () => {
    fetchData ()
    
}, []);

const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  const json = await data.json();


  console.log(json);
  setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

}

  return (
    <div className="body">
      <div className="filter">
          <button className="filter-btn"
            onClick={()=> {
             const filteredList = listOfRestaurants.filter((res) => res.info.avgRating>4);
             setListOfRestaurants(filteredList);              
            }}
          >
            Top Rated Restaurants
          </button>
      </div>
      <div className="resto-container">
        {listOfRestaurants.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;