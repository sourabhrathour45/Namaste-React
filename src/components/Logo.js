import { LOGO_URL } from "../ultils/constants";
// {LOGO_URL} Convention used in named exports

const Logo = () => {
  return (
    <div id="logo-container">
      <img id="logo" alt="logo" src={LOGO_URL}></img>
    </div>
  );
};

export default Logo;
