import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CoinCard from "../components/CoinCard";
import CoinNav from "../components/CoinNav";

import { getCoinId } from "../helpers/fetchCoins";

const CoinScreen = () => {
  const { id } = useParams();
  console.log(id);

  const [coin, setCoin] = useState({
    datos: {},
    loading: true,
  });

  useEffect(() => {
    getCoinId(id).then((respuesta) => {
      setCoin({
        datos: respuesta,
        loading: false,
      });
    });
  }, []);

  return (
    <>
      <CoinNav />
      <div className="container">
        <div className="row coin-container">
          <div className="col-12 col-md-8">
            <div className="card mb-3">
              {coin.loading ? (
                <h3>Cargando...</h3>
              ) : (
                <CoinCard coin={coin.datos} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinScreen;
