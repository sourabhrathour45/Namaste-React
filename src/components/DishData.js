import { CDN_URL } from "../ultils/constants";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useDispatch } from "react-redux";
import { addItem } from "../ultils/cartSlice";
import { useSelector } from "react-redux";

const DishData = ({ data }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  console.log(cart);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    console.log(item.card.info.id);
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
            <div className="w-3/12 m-4 mt-8 mb-16 relative ">
              <img
                className="rounded-lg shadow-lg"
                src={CDN_URL + item?.card?.info?.imageId}
              ></img>
              {
              cart?.map((foodItem) => {
                foodItem?.card?.info?.id === item?.card?.info?.id
              }) ? (
                <div className=" flex justify-between w-28 px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-300 rounded-lg absolute top-32 left-14 shadow-lg hover:shadow-xl hover:bg-orange-200 cursor-pointer border border-orange-300 hover:border-orange-400 ">
                  <button>-</button>
                  <span>{}</span>
                  <button onClick={() => handleAddItem(item)}>+</button>
                </div>
              ) : (
                <button
                  onClick={() => handleAddItem(item)}
                  className=" w-28 px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-300 rounded-lg absolute top-32 left-14 shadow-lg hover:shadow-xl hover:bg-orange-200 cursor-pointer border border-orange-300 hover:border-orange-400 "
                >
                  Add Item
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DishData;
