import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      console.log(respuesta);
    });
  }, []);

  return (
    <div>
      <h1>Coin Screen</h1>
    </div>
  );
};

export default CoinScreen;
