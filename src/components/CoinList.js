import React from "react";
import Coin from "./Coin";

const Coinlist = ({ coins, search }) => {
  const fetchCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-list">
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

export default Coinlist;
