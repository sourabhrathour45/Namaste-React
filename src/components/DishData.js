import { CDN_URL } from "../ultils/constants";
const DishData = ({ data }) => {
  console.log(data);

  return (
    <>
      <div>
        {data.map((item) => (
          <div key={item?.card?.info?.id} className="flex border-b border-orange-200">
            <div className="w-9/12">
                <h1 className="text-lg my-4 mt-8 font-[500] text-slate-800">{item?.card?.info?.name}</h1>
              
              <span className="text-slate-900 bg-orange-100 px-2 rounded-lg shadow-sm font-[500] text-sm py-2">
                Rs {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
              <p className="text-sm my-4 mr-4 py-4 text-gray-700">
                {item?.card?.info?.description}
              </p>

            </div>
            <div className="w-3/12 m-4 mt-8 "><img className="rounded-lg shadow-lg" src={CDN_URL + item?.card?.info?.imageId}></img></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DishData;
