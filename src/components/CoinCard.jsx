import React from "react";

import numeral from "numeral";

import CoinSymbol from "./CoinSymbol";

const CoinCard = ({ coin }) => {
  return (
    <div className="row g-0">
      <div className="col-md-4 d-flex justify-content-center align-items-center coin-img py-3">
        <CoinSymbol symbol={coin.symbol} />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h3 className="card-title">
            {coin.name} ({coin.symbol})
          </h3>
          <div className=" div-rank mb-3">
            <h4 className="m-0 ">{coin.rank}</h4>
            <p className="card-text ms-2"> Rank</p>
          </div>
          <div className=" d-flex align-items-center mb-2">
            <h5 className="m-0 ">Price Usd:</h5>
            <p className="card-text ms-2">
              {numeral(coin.priceUsd).format("$0,0.00")}
            </p>
          </div>
          <div className="d-flex align-items-center mb-2">
            <h5 className="m-0 ">Supply:</h5>
            <p className="card-text ms-2">
              {numeral(coin.supply).format("($ 0.00 a)")}
            </p>
          </div>
          <div className="d-flex align-items-center mb-2">
            <h5 className="m-0 ">Volumen Usd:</h5>
            <p className="card-text ms-2">
              {numeral(coin.volumeUsd24Hr).format("($ 0.00 a)")}
            </p>
          </div>

          <h5
            className={
              coin.changePercent24Hr > 0 ? "text-success" : "text-danger"
            }
          >
            {parseFloat(coin.changePercent24Hr).toFixed(2)}%
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
