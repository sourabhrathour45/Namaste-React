import Logo from "./Logo";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginText, setLoginText] = useState("Login");

  const changeLogState = () => {
    if (loginText === "Login") {
      setLoginText("Logout");
    } else setLoginText("Login");
  };

  return (
    <nav className="flex justify-between items-center w-screen bg-[#FFF6E7] shadow-lg font-[400] text-orange-950 ">
      <Logo />
      <div className="mr-14">
        <ul className=" hidden lg:flex lg:text-xl items-center font-Inter">
          <li className="px-6">
            <Link to="/">Home</Link>
          </li>
          <li className="px-6">Your Orders</li>
          <li className="px-6">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-6">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-6">Cart</li>
          <button className="px-4 bg-orange-700 hover:bg-orange-800 shadow-sm w-24 text-center text-white rounded-lg text-lg p-1 ml-4" onClick={changeLogState}>
            {loginText}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
