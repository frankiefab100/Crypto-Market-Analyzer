// import React from "react";
// import SearchCoin from "./SearchCoin";

// const FilterSearch = ({ coins, search }) => {
//   const filterCoin = coins.filter((coin) =>
//     coin.name.toLowerCase().includes(search.toLowerCase())
//   );
//   return (
//     <div>
//       <SearchCoin search={filterCoin} />
//     </div>
//   );
// };

// export default FilterSearch;

// import React from "react";
// import Coin from "./Coin";

// const CoinList = ({ coins, search }) => {
//   const [filteredcoins, setFilteredcoins] = React.useState([]);
//   const [search, setSearch] = useState("");
//   function handleFilter(e) {
//     const enteredWord = e.target.value;
//     setSearch(enteredWord);
//     const newWord = coins.filter((coin) =>
//       coin.name.toLowerCase().includes(props.search.toLowerCase())
//     );

//     if (enteredWord === "") {
//       setFilteredcoins([]);
//     } else {
//       setFilteredcoins(newWord);
//     }
//   }
//   return (
//     <div className="coin-list">
//       <div className="result">
//         {coins &&
//           coins.map((coin, index) => (
//             <Coin
//               number={index + 1}
//               key={coin.id}
//               image={coin.image}
//               name={coin.name}
//               symbol={coin.symbol}
//               volume={coin.total_volume}
//               price={coin.current_price}
//               priceChange={coin.price_change_percentage_24h}
//               marketCap={coin.market_cap}
//               {...coins}
//             />
//           ))}

//         {filteredcoins.length !== 0 &&
//           filteredcoins.map((result, index) => {
//             return (
//               <Coin
//                 number={index + 1}
//                 key={result.id}
//                 image={result.image}
//                 name={result.name}
//                 symbol={result.symbol}
//                 volume={result.total_volume}
//                 price={result.current_price}
//                 priceChange={result.price_change_percentage_24h}
//                 marketCap={result.market_cap}
//               />
//             );
//           })}

//         {/* {fetchCoins.map((coin, index) => {
//           return (
//             <Coin
//               number={index + 1}
//               key={coin.id}
//               image={coin.image}
//               name={coin.name}
//               symbol={coin.symbol}
//               volume={coin.total_volume}
//               price={coin.current_price}
//               priceChange={coin.price_change_percentage_24h}
//               marketCap={coin.market_cap}
//             />
//           );
//         })} */}
//       </div>
//     </div>
//   );
// };

// export default CoinList;
