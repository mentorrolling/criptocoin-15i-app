import React, { useEffect, useState } from "react";
import { getCoinSearch } from "../helpers/fetchCoins";

const CoinSearch = ({ coins, setCoins }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue.length === 0) {
      getCoinSearch().then((respuesta) => {
        setCoins({
          ...coins,
          datos: respuesta,
        });
      });
    }
  }, [inputValue]);

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      getCoinSearch(inputValue).then((respuesta) => {
        setCoins({
          ...coins,
          datos: respuesta,
        });
      });
    }
  };
  return (
    <div className="col-12 col-md-6 offset-md-3 mt-5">
      <input
        className="form-control"
        type="text"
        placeholder="Cripto name..."
        name={inputValue}
        onChange={handleChange}
        onKeyUp={handleEnter}
      />
    </div>
  );
};

export default CoinSearch;
