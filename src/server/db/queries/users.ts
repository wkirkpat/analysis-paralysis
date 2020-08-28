import { Query } from "../index";

//Gets a user from the DB by their id, used for authentication and author info page
export const getOneById = async (id: string) =>
  Query("SELECT * FROM users WHERE id = ?", [id]);

//Gets all blogs associated with a specific user
export const getUserBlogs = async (id: string) =>
  Query(
    "SELECT blogs.title, blogs.id, blogs.content, blogs.authorid, users.firstName, users.lastName, blogs._created FROM blogs JOIN users ON blogs.authorid = users.id WHERE authorid = ?",
    [id]
  );

//Get a user by their email address
export const getOneByEmail = async (email: string) =>
  Query("SELECT * FROM users WHERE email = ?", [email]);

export default {
  getOneByEmail,
  getUserBlogs,
  getOneById,
};
