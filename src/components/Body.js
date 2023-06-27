import Cards from "./Cards";
import { useState, useEffect } from "react";
import Toggle from "react-styled-toggle";
import Shimmer from "./Shimmer";
import SearchIcon from '@mui/icons-material/Search';
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
      <div className="search-icon-container">
      <SearchIcon fontSize={"large"} className="search-icon"></SearchIcon>
      </div>
 

    </div>
  );
};

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2370677&lng=85.7455138&page_type=DESKTOP_WEB_LISTING"
    );

    json = await data.json();

    console.log(json);
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  toggleOn = () => {
    showingTopRes = !showingTopRes;
    if (showingTopRes === true) {
      const filteredList = listOfRestaurants?.filter(
        (res) => res.data.avgRating > 4
      );
      setListOfRestaurants(filteredList);
    } else setListOfRestaurants(json.data?.cards[2]?.data?.data?.cards);
  };

  if (listOfRestaurants?.length === 0) {
    return <Shimmer />;
  }

  if (json?.data?.cards[0]?.data?.data?.totalOpenRestaurants === 0) {
    console.log("All closed");
    return (
      <div className="all-closed-container">
        <h1 className="all-closed">Oops! No Restaurants open right now.</h1>
        <h2>You better cook food at home :)</h2>
      </div>
    );
  }

  return (
    <div className="container-div">
      <div id="card-container">
        {listOfRestaurants?.map((restaurant) => (
          <Cards key={restaurant.data.uuid} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
