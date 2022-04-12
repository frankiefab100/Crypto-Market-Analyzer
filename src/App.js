import React, { useState, useEffect } from "react";
import axios from "axios";
import Coinlist from "./components/CoinList";
import SearchCoin from "./components/SearchCoin";
import "./index.css";

function App() {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`
        );

        setCoins((coins) => [...coins, ...response.data]);
      } catch (error) {
        alert(error);
      }
    };

    fetchData();

    return (e) => {
      setSearch(e.target.value);
    };
  }, [page]);

  const getInputValue = (e) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
  };

  const loadMoreCoins = () => {
    setPage((page) => page + 1);
  };

  return (
    <div className="App">
      <SearchCoin handleChange={getInputValue} />
      <Coinlist coins={coins} search={search} />

      <div className="button-container">
        <button className="loadmore-btn" onClick={loadMoreCoins}>
          See More
        </button>
      </div>
    </div>
  );
}

export default App;
