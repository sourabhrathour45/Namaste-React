import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../ultils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);



  let { resID }  = useParams();

  console.log(resID)

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API+resID);

    const json = await data.json();

    console.log(json);

    setResInfo(json?.data);
  };

  if (resInfo === null) {
    return (
      <>
        <div className="container-div">
          {/* <img src="https://indianmemetemplates.com/wp-content/uploads/ruko-zara-sabar-karo.jpg"></img> */}
            Please Wait... Fetching the Menu
        </div>
      </>
    );
  }

  const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="container-div">
      <div>
        <h1> {name}</h1>
        <br></br>
        <p> {cuisines.join(", ")}</p>
        <br></br>
        <h3>Menu</h3>
        <br></br>
        <ul>
          {itemCards?.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} : ₹ {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
