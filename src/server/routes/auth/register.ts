import * as express from "express";
import db from "../../db";
import { hashPassword } from "../../utils/security/passwords";
import { createToken } from "../../utils/security/tokens";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    let user = req.body;
    user.password = hashPassword(req.body.password);
    let result: any = await db.Users.insert(
      user.username,
      user.email,
      user.password,
      user.firstName,
      user.lastName
    );
    let token = await createToken({ userid: result.insertId });
    res.json({
      token,
      role: "guest",
      userid: result.insertId,
    });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
