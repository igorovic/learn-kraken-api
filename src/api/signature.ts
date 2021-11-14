import { debug } from "console";
import crypto from "crypto";
import qs from "qs";

import { SECRET } from "./config";

export function getMessageSignature(
  path: string,
  request: object,
  nonce: number
) {
  if (!SECRET) {
    throw new Error("SECRET env variable is missing");
  }
  const message = qs.stringify(request);
  const secret_buffer = Buffer.from(SECRET, "base64");
  const hash = crypto.createHash("sha256");
  const hmac = crypto.createHmac("sha512", secret_buffer);
  const hash_digest = hash
    .update(nonce + message)
    .digest()
    .toString("binary");

  const hmac_digest = hmac
    .update(path + hash_digest, "binary")
    .digest("base64");

  return hmac_digest;
}
