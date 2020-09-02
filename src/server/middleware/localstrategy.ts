import * as passport from "passport";
import * as localStrategy from "passport-local";
import { comparePassword } from "../utils/security/passwords";
import db from "../db";

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(
  new localStrategy.Strategy(
    {
      usernameField: "email",
      session: false,
    },
    async (email, password, done) => {
      try {
        let [user]: any = await db.Users.getOneByEmail(email);
        if (user && comparePassword(password, user.password)) {
          delete user.password;
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (e) {
        done(e);
      }
    }
  )
);
