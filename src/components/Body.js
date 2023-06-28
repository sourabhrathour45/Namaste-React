import Cards from "./Cards";
import { useState, useEffect } from "react";
import Toggle from "react-styled-toggle";
import Shimmer from "./Shimmer";

let toggleOn,
  showingTopRes = false,
  json;

export const Search = (props) => {
  return (
    <div className="container-div">
      <div id="toggle-container">
        <Toggle
          onChange={() => toggleOn()}
          labelLeft="Top Rated Restaurants"
          backgroundColorChecked="#20551E"
        ></Toggle>
      </div>
      <input
        type="search"
        name="search"
        placeholder="Search..."
        value={props?.searchTxt}
        onChange={(event) => {
          props.setSearchTxt(event.target.value);
        }}
        onKeyUp={props?.filterTxt}
      ></input>
    </div>
  );
};

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const filterText = () => {
    let searchFilteredResults = listOfRestaurants.filter((res) =>
      res.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(searchFilteredResults);
  };

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
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  if (listOfRestaurants?.length === 0) {
    return (
      <>
        <Search />
        <Shimmer />
      </>
    );
  }

  if (
    listOfRestaurants.filter((res) =>
      res.data.name.toLowerCase().includes(searchText.toLowerCase())
    ).length === 0
  ) {
    return (
      <>
        <Search
          searchTxt={searchText}
          setSearchTxt={setSearchText}
          filterTxt={filterText}
        />

        <div className="all-closed-container">
          <h1 className="all-closed"> No Restaurants found buddy :( </h1>
          <h2>Mai Dhoondhne ko zamane me jab khana niklaa...</h2>
          <br></br>
          <h2>Pata chala ki galat leke mai pata niklaaa 😢</h2>
        </div>
      </>
    );
  }

  toggleOn = () => {
    showingTopRes = !showingTopRes;
    if (showingTopRes === true) {
      const filteredList = listOfRestaurants?.filter(
        (res) => res.data.avgRating > 4
      );
      setFilteredRestaurants(filteredList);
    } else setFilteredRestaurants(json.data?.cards[2]?.data?.data?.cards);
  };

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
    <>
      <Search
        searchTxt={searchText}
        setSearchTxt={setSearchText}
        filterTxt={filterText}
      />
      <div className="container-div">
        <div id="card-container">
          {filteredRestaurants?.map((restaurant) => (
            <Cards key={restaurant.data.uuid} resData={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
