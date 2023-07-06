import { useParams } from "react-router-dom";
import useRestaurantMenu from "../ultils/useRestaurantMenu";

const RestaurantMenu = () => {
  let { resID } = useParams();

  const resInfo = useRestaurantMenu(resID);

  if (resInfo === null) {
    return (
      <>
        <div className="flex justify-center mt-24">
          <h1 className="text-2xl text--slate-600">
          Please Wait... Fetching the Menu
          </h1>
          
          </div>
      </>
    );
  }

  const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ;

  return (
    <div className="flex justify-center mt-24 w-full">
      <div className="lg:w-2/6 w-11/12">
        <h1 className="text-3xl font-bold"> {name}</h1>
        <br></br>
        <p className="text-slate-700"> {cuisines.join(", ")}</p>
        <br></br>
        <h3 className="text-xl font-bold text-orange-900 bg-orange-200 drop-shadow-lg p-4 rounded-lg text-center"> 📍 Menu </h3>
        <br></br>
        <br></br>
        <ul>
          {itemCards?.map((item) => (
            <li className="text-lg py-8 px-4 font-Inter bg-[#FFF6E7] mb-4 drop-shadow-lg rounded-lg" key={item?.card?.info?.id}>
              {item?.card?.info?.name} : ₹{" "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
