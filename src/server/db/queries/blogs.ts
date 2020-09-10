import { Query } from "../index";

//This grabs all the blogs, it is intended for the front page so it grabs only the title, content, author name, and date of creation.
export const getAllBlogs = async () =>
  Query(
    "SELECT blogs.title, blogs.description, blogs.id, blogs.content, blogs.authorid, users.firstName, users.lastName, blogs._created FROM blogs JOIN users ON blogs.authorid = users.id;"
  );

//This is intended to grab one blog for when a user clicks on a blog. Tags are grabbed from a different table and using a different query
export const getOneBlog = async (id: string) =>
  Query(
    "SELECT blogs.title, blogs.id, blogs.content, users.firstName, blogs.authorid, users.lastName, blogs._created FROM blogs JOIN users ON blogs.authorid = users.id WHERE blogs.id = ?;",
    [id]
  );

//This adds a new blog to the DB
export const newBlog = async (
  title: string,
  content: string,
  authorid: number,
  description: string
) =>
  Query(
    "INSERT INTO blogs (title, content, authorid, description) VALUES (?, ?, ?, ?);",
    [title, content, authorid, description]
  );

//For editing an existing blog
export const updateBlog = async (
  title: string,
  content: string,
  authorid: number,
  tag: string,
  id: string
) =>
  Query("CALL spUpdateBlog(?,?,?,?,?);", [title, content, authorid, tag, id]);

//For deleting a blog
export const deleteBlog = async (id: string) =>
  Query("DELETE FROM blogs WHERE id = ?", [id]);

//You can use this to change whether or not a blog is featured, meaning it is emphasized on the front page
export const changeFeatured = async (isFeatured: boolean, id: string) =>
  Query("UPDATE blogs SET featured = ? WHERE id = ?", [isFeatured, id]);

//Get the currently featured articles
export const getFeatured = async () =>
  Query(
    "SELECT users.firstName, users.lastName, blogs.* FROM blogs JOIN users ON blogs.authorid = users.id WHERE featured = 1 ORDER BY _created DESC LIMIT 3;"
  );

//Gets all blogs with a given tag
export const getByTag = async (tag: string) =>
  Query("CALL spGetBlogsWithTagX(?);", [tag]);

export default {
  getAllBlogs,
  getOneBlog,
  newBlog,
  updateBlog,
  deleteBlog,
  changeFeatured,
  getFeatured,
  getByTag,
};
