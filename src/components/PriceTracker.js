import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";

const PriceTracker = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.json());
        console.log(res.data);
      })
      .catch((error) => alert(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const fetchCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="price-tracker">
      <div className="search">
        <h1>Cryptocurrency Analysis</h1>
        <form>
          <input
            type="text"
            id="search-bar"
            placeholder="Enter a Crypto coin/token"
            onChange={handleChange}
          />
        </form>
      </div>

      <div className="result">
        {fetchCoins.map((coin, index) => {
          return (
            <Coin
              number={index + 1}
              key={coin.id}
              image={coin.image}
              name={coin.name}
              symbol={coin.symbol}
              volume={coin.total_volume}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              marketCap={coin.market_cap}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PriceTracker;
