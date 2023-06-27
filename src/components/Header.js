import Logo from "./Logo";
import { useState } from "react";

const Header = () => {

  const [loginText,setLoginText] = useState("Login")

  const changeLogState = () => {
    if (loginText === "Login") {
      setLoginText("Logout")
    } else setLoginText("Login")
  };



  return (
    <nav id="header">
      <Logo />
      <div>
        <ul id="nav-links">
          <li>Home</li>
          <li>Restaurants</li>
          <li>Your Orders</li>
          <li>About Us</li>
          <li>Cart</li>
          <button className="login-btn" onClick={changeLogState}>
            {loginText}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
