import { Query } from "../index";

//provide the id of a blog to get all the tags associated with that blog
export const getTags = async (id: string) => Query("CALL spBlogTags(?)", [id]);

//Gets all tags that can possible by applied to a blog
export const getAllTags = async () => Query("SELECT * FROM tags;");

export default {
    getTags,
    getAllTags
}