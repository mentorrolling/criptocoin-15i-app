import axios from "axios";
const limite = 10;
// const url = "https://api.coincap.io/v2/assets";

export const getCoins = async () => {
  const { data } = await axios(
    `https://api.coincap.io/v2/assets?limit=${limite}`
  );
  // const resp = await fetch(`https://api.coincap.io/v2/assets?limit=${limite}`);
  // const { data } = await resp.json();

  // return data;
  return data.data;
};

export const getCoinId = async (id) => {
  const resp = await fetch(`https://api.coincap.io/v2/assets/${id}`);
  const { data } = await resp.json();

  return data;
};
