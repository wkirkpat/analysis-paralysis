import * as express from "express";
import DB from "../../db";

let router = express.Router();

router.get("/", async (req, res) => {
  try {
    let blogs = await DB.Blogs.getAllBlogs();
    res.json(blogs);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/view/:id", async (req, res) => {
  try {
    let blog = await DB.Blogs.getOneBlog(req.params.id);
    res.json(blog);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/add", async (req, res) => {
  try {
    res.json(
      await DB.Blogs.newBlog(
        req.body.title,
        req.body.content,
        req.body.authorid
      )
    );
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.put("/edit/:id", async (req, res) => {
  try {
    res.json(
      await DB.Blogs.updateBlog(
        req.body.title,
        req.body.content,
        req.body.authorid,
        req.body.tag,
        req.params.id
      )
    );
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    res.json(await DB.Blogs.deleteBlog(req.params.id));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/featured", async (req, res) => {
  try {
    let featured = await DB.Blogs.getFeatured();
    res.json(featured);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.put("/featured/:id", async (req, res) => {
  try {
    res.json(await DB.Blogs.changeFeatured(req.body.isFeatured, req.params.id));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
