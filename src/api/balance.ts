import qs from "qs";
import client from "./client";
import { getMessageSignature } from "./signature";
import { API_VERSION } from "./config";

import { debug } from "../utils/log";

export default async function getBalance() {
  const path = "/" + API_VERSION + "/private/Balance";
  const nonce = Date.now();
  debug(nonce);
  const request = { nonce };
  const msgSignature = getMessageSignature(path, request, nonce);
  return client.post(path, qs.stringify(request), {
    headers: {
      "API-Sign": msgSignature,
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    },
  });
}
