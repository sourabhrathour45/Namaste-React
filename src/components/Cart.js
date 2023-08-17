import { BentoTwoTone } from "@mui/icons-material";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../ultils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const calculatePrice = () => {
    const totalPrice = cart.reduce((accumulator, item) => {
      return (
        accumulator + (item.card.info.price / 100) * item.quantity ||
        accumulator + (item.card.info.defaultPrice / 100) * item.quantity
      );
    }, 0);

    return totalPrice.toFixed(0);
  };

  const toPayPrice = () => {
    let itemsTotal = parseInt(calculatePrice(), 10);
    let totalPrice = itemsTotal + (60 + 2 + 15);
    return totalPrice;
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className=" w-[1200px] ml-auto mr-auto overflow-x-hidden flex justify-between">
        <div className=" mx-8 font-bold text-orange-900 my-8 h-[90%] p-4  rounded-xl w-[50%]">
          <h1 className="m-4  text-xl p-4">Add a delivery address</h1>
          <form>
            <input
              className="w-[80%]  h-10 bg-[#FFF6E7] p-4 font-normal text-base text-slate-800 rounded-xl ml-8 drop-shadow-md focus:outline-none"
              placeholder="Flat number/ House number "
            ></input>

            <input
              className="w-[80%] my-8  h-10 bg-[#FFF6E7] p-4 font-normal text-base text-slate-800 rounded-xl ml-8 drop-shadow-md focus:outline-none"
              placeholder="Loacality name"
            ></input>

            <input
              className="w-[80%]  h-10 bg-[#FFF6E7] p-4 font-normal text-base text-slate-800 rounded-xl ml-8 drop-shadow-md focus:outline-none"
              placeholder="State / City"
            ></input>

            <input
              className="w-[80%] my-8  h-10 bg-[#FFF6E7] p-4 font-normal text-base text-slate-800 rounded-xl ml-8 drop-shadow-md focus:outline-none"
              placeholder="Pincode"
              type="number"
            ></input>
          </form>
        </div>

        <div className="flex w-[45%] ">
          <div className="w-[100%]  mr-20">
            <div className="bg-[#FFF6E7] my-8 p-4 shadow-lg rounded-xl cursor-pointer ">
              <h1 className="text-center font-bold text-2xl text-orange-900 my-8">
                Your Cart
              </h1>
              <CartItem />
              {cart?.length > 0 ? (
                <div>
                  <div className="flex flex-col items-center">
                    <div className="w-[60%] text-center border border-dashed  border-gray-400 px-1 py-2">
                      <span className="text-sm">Apply Coupon</span>
                    </div>
                  </div>
                  <div>
                    <h1 className="mx-4 my-6 text-slate-600 text-sm font-bold ">
                      Bill Details
                    </h1>
                    <div className="flex justify-between my-2 mx-4">
                      <span className="text-sm text-slate-700">Item Total</span>
                      <span className="text-sm text-slate-700">
                        ₹{calculatePrice()}
                      </span>
                    </div>
                    <div className="flex justify-between my-2 mx-4">
                      <span className="text-sm text-slate-700">
                        Delivery Fee | 7 kms
                      </span>
                      <span className="text-sm text-slate-700"> ₹60</span>
                    </div>
                    <div className="flex justify-between my-2 mx-4">
                      <span className="text-sm text-slate-700">
                        Platform Fee
                      </span>
                      <span className="text-sm text-slate-700">₹2</span>
                    </div>
                    <div className="flex justify-between my-2 mx-4">
                      <span className="text-sm text-slate-700">
                        GST and Restaurant Charges
                      </span>
                      <span className="text-sm text-slate-700"> ₹15</span>
                    </div>
                    <div className="h-1 w-[100%] border-b border-gray-400 my-4"></div>
                    <div className="flex justify-between my-2 mx-4">
                      <span className="text-gray-600 font-bold">TO PAY</span>
                      <span className="text-gray-600 font-bold">
                        ₹{toPayPrice()}
                      </span>
                    </div>
                    <div className="h-1 w-[100%] border-b border-gray-400 my-2"></div>
                  </div>
                  <div className="flex my-10 justify-between">
                    <button
                      onClick={handleClearCart}
                      className="px-3 ml-8 py-2 bg-gradient-to-r from-red-700 to-red-800 shadow-xl text-white rounded-lg "
                    >
                      <i className="fa-solid fa-trash pr-2 text-sm"></i>
                      Clear Cart
                    </button>
                    <Link to="/checkout">
                      <button onClick={()=>dispatch(clearCart())} className="px-3 mr-8 py-2 bg-gradient-to-r from-green-700 to-green-800 shadow-xl text-white rounded-lg ">
                        <i className="fa-solid fa-right-to-bracket pr-2 text-sm"></i>
                        Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
