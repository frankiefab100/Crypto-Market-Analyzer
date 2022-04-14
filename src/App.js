import React, { useState, useEffect } from "react";
import axios from "axios";
import CoinList from "./components/CoinList";
import SearchBar from "./components/SearchBar";
import LoadMoreButton from "./components/LoadMoreButton";
import "./index.css";

function App() {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(null);

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
  }, [page]);

  const loadMoreCoins = () => {
    setPage(page + 1);
  };

  return (
    <div className="App">
      <SearchBar />
      <CoinList coins={coins} />
      <LoadMoreButton handleClick={loadMoreCoins} />
    </div>
  );
}

export default App;
