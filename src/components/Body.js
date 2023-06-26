import Cards from "./Cards";
import { useState, useEffect } from "react";
import Toggle from "react-styled-toggle";
let toggleOn,
  showingTopRes = false,
  json;

export const Search = () => {
  return (
    <div className="container-div">
      <div id="toggle-container">
        <Toggle
          onChange={() => toggleOn()}
          labelLeft="Top Rated Restaurants"
          backgroundColorChecked="#20551E"
        ></Toggle>
      </div>
      <input type="search" name="search" placeholder="Search..."></input>
    </div>
  );
};

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(()=>{
  fetchData();
  },[])


  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2370677&lng=85.7455138&page_type=DESKTOP_WEB_LISTING");

    json = await data.json();
   
    console.log(json);
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards) 
  }

  toggleOn = () => {
    showingTopRes = !showingTopRes;
    if (showingTopRes === true) {
      const filteredList = listOfRestaurants.filter(
        (res) => res.data.avgRating > 4
      );
      setListOfRestaurants(filteredList);
    } else setListOfRestaurants(json.data?.cards[2]?.data?.data?.cards);
  };

  return (
    <div className="container-div">
      <div id="card-container">
        {listOfRestaurants.map((restaurant) => (
          <Cards key={restaurant.data.uuid} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
