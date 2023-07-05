import { useParams } from "react-router-dom";
import useRestaurantMenu from "../ultils/useRestaurantMenu";

const RestaurantMenu = () => {
  let { resID } = useParams();

  const resInfo = useRestaurantMenu(resID);

  if (resInfo === null) {
    return (
      <>
        <div className="container-div">Please Wait... Fetching the Menu</div>
      </>
    );
  }

  const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="container-div">
      <div>
        <h1> {name}</h1>
        <br></br>
        <p> {cuisines.join(", ")}</p>
        <br></br>
        <h3>Menu</h3>
        <br></br>
        <ul>
          {itemCards?.map((item) => (
            <li key={item?.card?.info?.id}>
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
