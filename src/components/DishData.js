import { CDN_URL } from "../ultils/constants";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../ultils/cartSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

const DishData = ({ data }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  console.log(cart);

  const handleAddItem = (item) => {
    const existingItem = cart.find(
      (foodItem) => foodItem?.card?.info?.id === item?.card?.info?.id
    );

    if (existingItem) {
      // If the item already exists in the cart, increase its quantity by 1
      dispatch(addItem({ ...item, quantity: existingItem.quantity + 1 }));
    } else {
      // If the item does not exist in the cart, add it with quantity 1
      dispatch(addItem({ ...item, quantity: 1 }));
    }
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const getItemQuantity = (itemId) => {
    const existingItem = cart.find(
      (foodItem) => foodItem?.card?.info?.id === itemId
    );
    return existingItem ? existingItem.quantity : 0;
  };

  return (
    <>
      <div>
        {data?.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="flex border-b border-orange-200"
          >
            <div className="w-9/12">
              <h1 className="text-lg my-4 mt-8 font-[500] text-slate-800">
                {item?.card?.info?.name}
              </h1>

              <span className="text-slate-900 bg-orange-100 px-2 rounded-lg shadow-sm font-[500] text-sm py-2">
                Rs{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
              <p className="text-sm my-4 mr-4 py-4 text-gray-700">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="w-3/12 flex justify-end flex-col items-center m-4 mt-8 mb-16 relative  ">
              <img
                className="rounded-lg shadow-lg "
                src={CDN_URL + item?.card?.info?.imageId}
              ></img>
              {getItemQuantity(item?.card?.info?.id) > 0 ? (
                <div className="  flex justify-between w-28 px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-300 rounded-lg absolute bottom-[-24px]   shadow-lg hover:shadow-xl hover:bg-orange-200 cursor-pointer border border-orange-300 hover:border-orange-400 font-semibold  text-orange-900 ">
                  <button onClick={() => handleRemoveItem(item)}>-</button>
                  <span>{getItemQuantity(item?.card?.info?.id)}</span>
                  <button onClick={() => handleAddItem(item)}>+</button>
                </div>
              ) : (
               
                  <button onClick={() => handleAddItem(item)} className="py-2 px-4  w-28  bg-gradient-to-r from-orange-100 to-orange-300 rounded-lg absolute bottom-[-24px] shadow-lg hover:shadow-xl hover:bg-orange-200 cursor-pointer border border-orange-300 hover:border-orange-400 font-semibold text-orange-900 ">Add Item</button>
              
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DishData;
