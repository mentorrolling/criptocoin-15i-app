import React, { useEffect, useState } from "react";
import { getCoinSearch } from "../helpers/fetchCoins";

const CoinSearch = ({ coins, setCoins }) => {
  const [inputValue, setInputValue] = useState("");

  //UseEffect que se ejecuta cuando está vacio el campo input
  useEffect(() => {
    if (inputValue.length === 0) {
      traerData();
    }
  }, [inputValue]);

  //funcion que ejecuta la peticion de busqueda
  const traerData = () => {
    getCoinSearch(inputValue).then((respuesta) => {
      setCoins({
        ...coins,
        datos: respuesta,
      });
    });
  };

  //funcion que se ejecuta cuando  escribo en el input
  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  //funcion que se ejecuta cuando doy enter en el input
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      traerData();
    }
  };

  return (
    <div className="col-12 col-md-6 offset-md-3 mt-5">
      <input
        className="form-control"
        type="text"
        placeholder="Search cripto..."
        value={inputValue}
        onChange={handleChange}
        onKeyUp={handleEnter}
      />
    </div>
  );
};

export default CoinSearch;
