import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

const productionUrlHF = " https://ikea-api.p.rapidapi.com";
export const customFetchHF = axios.create({
  baseURL: productionUrlHF,
  // params: {
  //   countryCode: "us",
  //   languageCode: "en",
  //   // keyword: 'best-sellers',
  // },

  headers: {
    "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY as string,
    "x-rapidapi-host": "ikea-api.p.rapidapi.com",
  },
});
