import * as express from "express";
import blogsRouter from "./blogs";
import usersRouter from "./users";
import tagsRouter from "./tags";

const router = express.Router();

router.use("/blogs", blogsRouter);
router.use("/users", usersRouter);
router.use("/tags", tagsRouter);

export default router;