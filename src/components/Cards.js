import {CDN_URL} from "../ultils/constants";
// {CDN_URL} Convention used in named exports

const Cards = (props) => {
    const { resData } = props;
    const {
      name,
      cuisines,
      avgRating,
      deliveryTime,
      costForTwoString,
      cloudinaryImageId,
    } = resData?.data;
  
    return (
      <div className="card">
        <img
          id="res-card-img"
          alt="card"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        ></img>
        <h3 className="card-description">{name}</h3>
        <p className="card-description">{cuisines.join(", ")}</p>
        <div id="card-description-secondary" class="card-description">
          <span>{avgRating + " ★"}</span>
          <span> • </span>
          <span>{deliveryTime + " minutes"}</span>
          <span> • </span>
          <span>{costForTwoString}</span>
        </div>
      </div>
    );
  };
  
  export default Cards;