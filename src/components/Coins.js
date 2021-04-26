import React from "react";

const Coins = (props) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={props.image} alt="crypto" />
          <h1>{props.name}</h1>
          <p className="coin-symbol">{props.symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">$ {props.price}</p>
          <p className="coin-volume">$ {props.volume.toLocaleString()}</p>

          {props.priceChange < 0 ? (
            <p className="coin-percent red">
              {props.priceChange.toFixed(2)}%
              <i class="fa down fa-fw fa-sort-desc"></i>
            </p>
          ) : (
            <p className="coin-percent green">
              {props.priceChange.toFixed(2)}%
              <i class="fa up fa-fw fa-sort-asc"></i>
            </p>
          )}
          <p className="coin-market">$ {props.marketCap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Coins;
