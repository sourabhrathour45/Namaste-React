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
    <nav id="header">
      <Logo />
      <div>
        <ul id="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Your Orders</li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
             Cart
          </li>
          <button className="login-btn" onClick={changeLogState}>
            {loginText}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
