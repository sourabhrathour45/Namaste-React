import { LOGO_URL } from "../ultils/constants";
// {LOGO_URL} Convention used in named exports

const Logo = () => {
  return (
    <div className="w-30 h-20">
      <img className="w-30 h-20 ml-4" alt="logo" src={LOGO_URL}></img>
    </div>
  );
};

export default Logo;
