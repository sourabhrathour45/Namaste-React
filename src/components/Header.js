import Logo from "./Logo";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginText, setLoginText] = useState("Login");
  const cart = useSelector((state) => state.cart.items);

  const changeLogState = () => {
    if (loginText === "Login") {
      setLoginText("Logout");
    } else setLoginText("Login");
  };

  return (
    <nav className="flex justify-between items-center w-screen bg-[#FFF6E7] shadow-lg font-[400] text-orange-950 ">
      <Link to="/">
        <Logo />
      </Link>
      <div className="mr-14">
        <ul className=" hidden lg:flex lg:text-xl items-center font-Inter">
          <Link to="/">
            <li className="px-6">
              <i className="fa-solid fa-house text-orange-900 pr-2"></i>
              Home
            </li>
          </Link>
          <li className="px-6">
          <i className="fa-solid fa-layer-group text-orange-900 pr-2"></i>
            Your Orders
            </li>
          <li className="px-6">
            <Link to="/about">
            <i className="fa-solid fa-user text-orange-900 pr-2"></i>
              About Us
              </Link>
          </li>
          <Link to="/contact" >
          <li className="px-6">
          <i className="fa-solid fa-envelope text-orange-900 pr-2"></i>
            Contact
          </li>
          </Link>
          <Link to="/cart">
            <li className="px-6 cursor-pointer">
             
              <i className="fa-solid fa-cart-shopping text-orange-900 pr-2"></i>Cart
              - {cart.length}
            </li>
          </Link>
          <button
            className="px-4 bg-orange-700 hover:bg-orange-800 shadow-sm w-24 text-center text-white rounded-lg text-lg p-1 ml-4"
            onClick={changeLogState}
          >
            {loginText}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
