import React, { useState } from "react";

const SearchBar = ({ coins, setCoins }) => {
  const [search, setSearch] = useState("");

  const getInputValue = (e) => {
    const inputValue = e.target.value;
    // setSearch(inputValue);

    coins.filter((value) => {
      if (inputValue === "") {
        return setCoins([]);
        // return value;
      } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
        return setSearch(value);
        // return value;
      }
    });
    // return setSearch(() => search(inputValue));
  };

  return (
    <div className="price-tracker">
      <div className="search">
        <h1>Cryptocurrency Market Analysis</h1>

        <input
          type="text"
          id="search-bar"
          placeholder="Enter a Crypto coin/token"
          onChange={getInputValue}
          // value={filteredCoin}
        />

        {/* {coins.filter((item) => {
          if (search === "") {
            return item;
          } else if (
            item.first_name.toLowerCase().includes(search.toLowerCase())
          ) {
            return item;
          }
        })} */}
      </div>
    </div>
  );
};

export default SearchBar;
