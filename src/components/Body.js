import Cards from "./Cards";
import resList from "../ultils/mockData";
import { useState } from "react";
import Toggle from "react-styled-toggle";
import resList from "../ultils/mockData";
let toggleOn,
  showingTopRes = false;

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
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  toggleOn = () => {
    showingTopRes = !showingTopRes;
    if (showingTopRes === true) {
      const filteredList = listOfRestaurants.filter(
        (res) => res.data.avgRating > 4
      );
      setListOfRestaurants(filteredList);
    } else setListOfRestaurants(resList);
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
