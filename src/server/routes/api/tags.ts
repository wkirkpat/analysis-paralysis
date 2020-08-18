import * as express from "express";
import DB from "../../db";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let tags = await DB.Tags.getAllTags();
    res.json(tags);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let tags = await DB.Tags.getTags(req.params.id);
    res.json(tags);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
