import axios from "axios";
import { API_VERSION } from "./config";

const client = axios.create({
  baseURL: "https://api.kraken.com",
  headers: {
    "API-Key": String(process.env.KRAKEN_APIKEY),
  },
});

export default client;
