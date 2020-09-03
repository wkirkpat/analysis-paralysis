import * as passport from "passport";
import * as bearerStrategy from "passport-http-bearer";
import { validToken } from "../utils/security/tokens";
import db from "../db";

passport.use(
  new bearerStrategy.Strategy(async (token, done) => {
    try {
      let payload = await validToken(token);
      let [user]: any = await db.Users.getOneById(payload.userid);
      if (user) {
        delete user.password;
        done(null, user);
      } else {
        done(null, false);
      }
    } catch (e) {
      done(e);
    }
  })
);
