import jwt from "jsonwebtoken";
import crypto from "crypto";
import config from "../../config";
import db from "../../db";

export const createToken = async (payload: IPayload) => {
  let tokenid = await db.AccessTokens.insert(payload.userid);
  payload.accesstokenid = tokenid.insertid;
  console.log(payload.accesstokenid);
  payload.unique = crypto.randomBytes(32).toString("hex");

  let token = await jwt.sign(payload, config.auth.JWTSecret, {
    expiresIn: "10d",
  });

  await db.AccessTokens.update(payload.accesstokenid, token);
  console.log(token);
  return token;
};

export const validToken = async (token: string) => {
  let payload: IPayload = <IPayload>jwt.decode(token);
  let [accesstokenid]: any = await db.AccessTokens.findOne(
    payload.accesstokenid,
    token
  );
  if (!accesstokenid) {
    throw new Error("Invalid Token!");
  } else {
    return accesstokenid;
  }
};

interface IPayload {
  [key: string]: any;
  userid: number;
  unqiue?: string;
}
