import { useParams } from "react-router-dom";
import useRestaurantMenu from "../ultils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  let { resID } = useParams();

  const resInfo = useRestaurantMenu(resID);

  if (resInfo === null) {
    return (
      <>
        <div className="flex justify-center mt-24">
          <h1 className="text-2xl text--slate-600">
            Please Wait... Fetching the Menu
          </h1>
        </div>
      </>
    );
  }

  const { name, cuisines, areaName, locality, feeDetails, avgRating, totalRatingsString  } = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card ||
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const itemData = categories.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="flex justify-center mt-24 w-full">
      <div className="lg:w-[50%] w-11/12">
        <div className="flex justify-between">
        <div>
        <h1 className="text-3xl font-bold"> {name}</h1>
        <br></br>
        <p className="text-slate-700"> {cuisines.join(", ")}</p>
        <br></br>
        <h6 className="text-slate-800">{areaName + ", " + locality}</h6>
        <h6 className="mb-8 text-slate-800">{feeDetails?.message}</h6>
        </div>
        <div className=" py-10 border border-orange-200 mr-6 mt-2 mb-8 px-4 h-[50%] bg-[#FFF6E7] rounded-lg shadow-lg" >
          <span>{avgRating}</span>
         <span className="text-green-800">  <i class="fa-solid fa-star"></i> </span>
         <div className="w-[80%] border-b border-gray-700 my-2"></div>
          <h2>{totalRatingsString}</h2>
        </div>
      </div>
        <div className="w-[100%] border-b border-dashed border-orange-800"></div>
        {itemData.map((category)=>
          <RestaurantCategory key={category?.card?.card?.title} itemData={category?.card?.card}/>
        )}
      </div>
      
    </div>
 
  );
};

export default RestaurantMenu;
