import React from "react";
import CoinSymbol from "./CoinSymbol";

import numeral from "numeral";
const CoinCard = ({ coin }) => {
  const { datos } = coin;
  return (
    <div className="row g-0">
      <div className="col-md-4 d-flex justify-content-center align-items-center coin-img py-3">
        <CoinSymbol symbol={datos.symbol} />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h3 className="card-title">
            {datos.name} ({datos.symbol})
          </h3>
          <div className=" div-rank mb-3">
            <h4 className="m-0 ">{datos.rank}</h4>
            <p className="card-text ms-2"> Rank</p>
          </div>
          <div className=" d-flex align-items-center mb-2">
            <h5 className="m-0 ">Price Usd:</h5>
            <p className="card-text ms-2">
              {numeral(datos.priceUsd).format("$0,0.00")}
            </p>
          </div>
          <div className="d-flex align-items-center mb-2">
            <h5 className="m-0 ">Supply:</h5>
            <p className="card-text ms-2">
              {numeral(datos.supply).format("($ 0.00 a)")}
            </p>
          </div>
          <div className="d-flex align-items-center mb-2">
            <h5 className="m-0 ">Volumen Usd:</h5>
            <p className="card-text ms-2">
              {numeral(datos.volumeUsd24Hr).format("($ 0.00 a)")}
            </p>
          </div>

          <h5
            className={
              datos.changePercent24Hr > 0 ? "text-success" : "text-danger"
            }
          >
            {parseFloat(datos.changePercent24Hr).toFixed(2)}%
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
