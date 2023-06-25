import Cards from "./Cards"
import resList from "../ultils/mockData"

const Body = () => {
    return (
      <div className="container-div">
            <div id="card-container">
        {resList.map((restaurant) => (
          <Cards key={restaurant.data.uuid} resData={restaurant} />
        ))}
      </div>
      </div>
    
    );
  };

  export default Body;