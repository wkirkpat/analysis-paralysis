import { Query } from "../index";

//provide the id of a blog to get all the tags associated with that blog
export const getTags = async (id: string) => Query("CALL spBlogTags(?)", [id]);

//Gets all tags that can possibly by applied to a blog
export const getAllTags = async () => Query("SELECT * FROM tags;");

//Insert a new reference into the blogtags table
export const insert = async (blogId: string, tagId: string) =>
  Query("INSERT INTO blog_tags(blogid, tagid) VALUES(?, ?)", [blogId, tagId]);

export default {
  getTags,
  getAllTags,
  insert,
};
