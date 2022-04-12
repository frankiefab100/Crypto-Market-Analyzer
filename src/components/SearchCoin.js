import React from "react";

const SearchCoin = (props) => {
  return (
    <div className="price-tracker">
      <div className="search">
        <h1>Cryptocurrency Market Analysis</h1>
        <form>
          <input
            type="text"
            id="search-bar"
            placeholder="Enter a Crypto coin/token"
            onChange={props.handleChange}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchCoin;
