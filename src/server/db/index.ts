import * as mysql from "mysql";
import config from "../config";
import Blogs from "./queries/blogs";
import Users from "./queries/users";
import Tags from "./queries/tags";

const pool = mysql.createPool(config.mysql);

export const Query = <T = any>(query: string, values?: any) => {
  return new Promise<T>((resolve, reject) => {
    const sql = mysql.format(query, values);
    console.log(sql);

    pool.query(sql, (err, results) => {
      if (err) return reject(err);
      else return resolve(results);
    });
  });
};

export default {
    Blogs,
    Users,
    Tags
}