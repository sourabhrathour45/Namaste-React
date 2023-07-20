import { useState } from "react";
import DishData from "./DishData";

// uncontrolled component 
const RestaurantCategory = ({ itemData }) => {
  const [isVisible, setIsVisible] = useState(false);

  const clickHandler = () => {
    setIsVisible(!isVisible);
  };

  

  return (
    <>
      <div
        className="bg-[#FFF6E7] my-8 p-4 shadow-lg rounded-lg cursor-pointer "
        onClick={clickHandler}
      >
        <div className="flex justify-between">
          <h1 className="text-xl font-bold text-orange-900">
            {itemData?.title} ({itemData?.itemCards?.length})
          </h1>
          <span className="px-2 text-orange-900 cursor-pointer">
            <i className="fa-solid fa-angle-down fa-xl"></i>
          </span>
        </div>
        <div>{isVisible && <DishData data={itemData?.itemCards} />}</div>
      </div>
    </>
  );
};

export default RestaurantCategory;
