import { LOGO_URL } from "../ultils/constants";
// {LOGO_URL} Convention used in named exports

const Header = () => {
  return (
    <nav id="header">
      <div id="image-container">
        <img id="logo" alt="logo" src={LOGO_URL}></img>
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

export default Header;
