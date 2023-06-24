import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <nav id="header">
      <div id="image-container">
        <img
          id="logo"
          alt="logo"
          src="https://drive.google.com/uc?export=download&id=1PrOLgDbWl_W2l9ouvkz1RLvZiOsls2HJ"
        ></img>
      </div>
      <div>
        <ul id="nav-links">
          <li>Home</li>
          <li>Restaurants</li>
          <li>Your Orders</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </nav>
  );
};

const Search = () => {
  return <div></div>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Search />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
