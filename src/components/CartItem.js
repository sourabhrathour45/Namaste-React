import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../ultils/cartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
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
        {cart?.length === 0 ? (
          <div className="w-full text-slate-800 text-sm flex flex-col items-center my-10">
            <span className="text-slate-700 text-base font-bold my-4">
              It seems like your cart is empty.
            </span>
            <span className="">
              But don't worry
            </span>
            <span className="mb-8">
              we'll not let that happen to your stomach.
            </span>
            <Link to="/">
              <button className="px-3 mb-6 py-2 bg-gradient-to-r from-green-700 to-green-800 shadow-xl text-white rounded-lg ">
                <i className="fa-solid fa-burger pr-2 text-sm" />
                Order Now
              </button>
            </Link>
          </div>
        ) : (
          cart.map((item) => (
            <div className="flex justify-between items-center my-12 mx-8 ">
              <div className="w-[40%]">
                <span className="text-sm  text-slate-800 ">
                  {item.card.info.name}
                </span>
              </div>

              <div className="px-8">
                <span className="text-slate-600  px-2 py-2 text-center  rounded-lg font-bold text-sm  ">
                ₹{" "}
                  {(item?.card?.info?.price / 100).toFixed(0) ||
                    (item?.card?.info?.defaultPrice / 100).toFixed(0)}
                </span>
              </div>
              <div>
                <div className=" flex justify-between w-24 text-sm px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-300 rounded-lg shadow-lg hover:shadow-xl hover:bg-orange-200 cursor-pointer border border-orange-300 hover:border-orange-400 font-semibold  text-orange-900 ">
                  <button onClick={() => handleRemoveItem(item)}>-</button>
                  <span>{getItemQuantity(item?.card?.info?.id)}</span>
                  <button onClick={() => handleAddItem(item)}>+</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default CartItem;
