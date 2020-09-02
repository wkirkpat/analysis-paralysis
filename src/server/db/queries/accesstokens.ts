import { Query } from "../index";

//Find one token based on id and token
export const findOne = async (id: string, token: string) =>
  Query("SELECT * from accesstokens WHERE id = ? and token = ?", [id, token]);

//Inserts a new record, but doesn't set the token yet. The token is added in the update query
export const insert = async (userid: number) =>
  Query("INSERT INTO accesstokens(userid) VALUES (?)", [userid]);

//Adds a token to an existing record
export const update = async (token: string, id: string) =>
  Query("UPDATE accesstokens SET token = ? WHERE id = ?", [token, id]);

export default {
  findOne,
  insert,
  update,
};
