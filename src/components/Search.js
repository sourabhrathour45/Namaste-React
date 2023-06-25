import Toggle from 'react-styled-toggle';

const Search = () => {
    return <div className="container-div">
      <div id="toggle-container">
      <Toggle></Toggle>
      </div>
      <input type="search" name="search" placeholder="Search..."></input>
    </div>;
  };

  export default Search;