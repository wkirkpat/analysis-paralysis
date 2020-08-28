import * as express from "express";
import DB from "../../db";

const router = express.Router();

router.get("/blogs/:id", async (req, res) => {
  try {
    let blogs = await DB.Users.getUserBlogs(req.params.id);
    res.json(blogs);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let author = await DB.Users.getOneById(req.params.id);
    res.json(author);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
