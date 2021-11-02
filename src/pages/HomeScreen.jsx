import React, { useState } from "react";
import { getCoins } from "../helpers/fetchCoins";
import CoinNav from "../components/CoinNav";
const HomeScreen = () => {
  const [coins, setCoins] = useState({
    datos: [],
    loading: true,
    update: true,
  });

  //Monta

  //Actualiza
  //desmonta

  //fetch
  getCoins().then((respuesta) => {
    console.log(respuesta);
  });

  return (
    <div>
      <CoinNav />
      {/* 
     navbar
     
     ----------
     barra de busqueda
     -------------------
     tabla 
     --------------------
     */}
    </div>
  );
};

export default HomeScreen;
