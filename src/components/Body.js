import Cards, { withPromotedLabel } from "./Cards";
import { useState, useEffect } from "react";
import Toggle from "react-styled-toggle";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../ultils/useOnlineStatus";

let toggleOn,
  showingTopRes = false,
  json;

export const Search = (props) => {
  return (
    <div className="flex w-full lg:w-11/12 justify-center mt-12 lg:mt-16 items-center ">
      <div className="hidden lg:block">
        <Toggle
          onChange={() => toggleOn()}
          labelLeft="Top Rated Restaurants"
          backgroundColorChecked="#9a3412"
        ></Toggle>
      </div>
      <input
        className="lg:w-1/3 w-11/12 h-14 bg-[#FFF6E7] p-4 rounded-xl mx-8 lg:ml-16 drop-shadow-md focus:outline-none"
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
  const onlineStatus = useOnlineStatus();
  const PromotedRestaurants = withPromotedLabel(Cards);

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
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    json = await data.json();

    console.log(json);
    setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // Checking Online Status
  if (onlineStatus === false) {
    return (
      <>
        <Search />
        <div className="all-closed-container">
          <h1 className="all-closed">
            Oops! Looks like you are offline buddy 🤯
          </h1>
          <h2>Just get some bloody internet in your veins.</h2>
        </div>
      </>
    );
  }

  // Displaying Shimmer
  if (listOfRestaurants?.length === 0) {
    return (
      <>
        <Search />
        <Shimmer />
      </>
    );
  }

  //  Displaying error message when nothing found on search
  // if (
  //   listOfRestaurants?.filter((res) =>
  //     res?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  //   ).length === 0
  // ) {
  //   return (
  //     <>
  //       <Search
  //         searchTxt={searchText}
  //         setSearchTxt={setSearchText}
  //         filterTxt={filterText}
  //       />

  //       <div className="flex justify-center mt-36">
  //         <div className="text-center">
  //           <h1 className="text-4xl font-bold text-orange-950 ">
  //             {" "}
  //             No Restaurants found buddy :({" "}
  //           </h1>
  //           <br></br>
  //           <h2 className="text-xl text-slate-800">
  //             Mai Dhoondhne ko zamane me jab khana niklaa...
  //           </h2>
  //           <h2 className="text-xl text-slate-800 mt-4">
  //             Pata chala ki galat leke mai pata niklaaa 😢
  //           </h2>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  // Refactor the code to make it more modular and avoid using global variables
  toggleOn = () => {
    showingTopRes = !showingTopRes;
    if (showingTopRes === true) {
      const filteredList = listOfRestaurants?.filter(
        (res) => res?.info?.avgRating > 4
      );
      setFilteredRestaurants(filteredList);
    } else setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return (
    <>
      <Search
        searchTxt={searchText}
        setSearchTxt={setSearchText}
        filterTxt={filterText}
      />
      <div className="flex justify-center mt-4 lg:mt-12 w-screen">
        <div className="flex flex-wrap md:w-2/3">
          {filteredRestaurants?.map((restaurant) => (
            <Link
              className="flex"
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.promoted ? (
                <PromotedRestaurants resData={restaurant} />
              ) : (
                <Cards resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
