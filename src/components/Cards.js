import { CDN_URL } from "../ultils/constants";
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
    <div className=" lg:w-60  flex-col relative w-11/12 p-4 mx-8  my-8 rounded-lg bg-[#FFF6E7] drop-shadow-md hover:drop-shadow-xl hover:bg-[#FFFBF2]">
      <img alt="card" src={CDN_URL + cloudinaryImageId}></img>

      <h3 className="text-lg font-semibold my-4 ">{name}</h3>

      <p className="text-slate-700 text-sm">{cuisines.join(", ")}</p>

      <div className="mt-4 text-slate-900 text-sm">
        <span>{avgRating + " ★"}</span>
        <span> • </span>
        <span>{deliveryTime + " minutes"}</span>
        <span> • </span>
        <span>{costForTwoString}</span>
      </div>
    </div>
  );
};

export const withPromotedLabel = (Cards) => {
  return (props) => {
    return (
      <> 
        <div className="relative flex ">
        <Cards {...props} />
        <label className=" absolute top-12 left-8 text-[0.75rem] px-2 py-1 m-2 text-white font-[500] backdrop-filter backdrop-blur-lg rounded-lg">
          Sponsered
        </label>
        </div>

      </>
    );
  };
};

export default Cards;
