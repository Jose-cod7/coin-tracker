import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import "./Coin.css";
import Coins from "./components/Coins";
import Footer from "./components/Footer";
//import $ from "jquery";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="coin-app" style={{ width: "100%" }}>
      <h1 className="title ">Coin tracker</h1>
      <div className="coin-search">
        <h2 className="coin-text">Search a currency</h2>
        <form>
          <input
            type="text"
            className="coin-input"
            placeholder="Search..."
            onChange={handleChange}
          />
        </form>
      </div>

      <div className="info-row">
        <div className="info-name">
          <p>Coin</p>
        </div>
        <div className="info-price">Price</div>
        <div className="info-volume">
          24h Volume{" "}
          <i
            className="fa tooltip question fa-question-circle"
            aria-hidden="true"
          >
            <span className="tooltiptext">
              A measure of how much of a cryptocurrency was traded in total
            </span>
          </i>
        </div>
        <div className="info-change">%</div>
        <div className="info-market">
          Mkt Cap{" "}
          <i
            className="fa tooltip question  fa-question-circle "
            aria-hidden="true"
          >
            <span className="tooltiptext">
              The total market value of a cryptocurrency's circulating supply.
              It is analogous to the free-float capitalization in the stock
              market. Market Cap = Current Price x Circulating Supply.
            </span>
          </i>
        </div>
      </div>

      {filteredCoins.map((coin) => {
        return (
          <Coins
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketCap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
