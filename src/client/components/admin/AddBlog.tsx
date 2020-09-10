import * as React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { json, User } from "../../utils/api";

const AddBlog: React.FC<IAddBlog> = () => {
  const [blogContent, setBlogContent] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDesc, setBlogDesc] = useState("");
  const [tags, setTags] = useState([]);
  const [blogTag, setBlogTag] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);

  const handleSubmit = async () => {
    let content = DOMPurify.sanitize(blogContent);
    setBlogContent(content);
    try {
      let results = await json("/api/blogs/add", "POST", {
        content: blogContent,
        title: blogTitle,
        description: blogDesc,
        authorid: User.userid,
      });
      let blogId = results.insertId;
      await json("/api/tags", "POST", { blogId, tagId: blogTag });
      await json(`/api/blogs/featured/${blogId}`, "PUT", { isFeatured });
    } catch (e) {
      throw e;
    }
  };

  const getTags = async () => {
    try {
      let tags = await json("/api/tags");
      setTags(tags);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    getTags();
  }, []);

  return (
    <>
      <h3>New Blog</h3>
      <input
        type="text"
        placeholder="Enter Title..."
        onChange={(event) => setBlogTitle(event.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Enter Description..."
        onChange={(event) => setBlogDesc(event.target.value)}
      ></input>
      <label htmlFor="tag-select">Choose a Tag: </label>
      <select
        onChange={(event) => setBlogTag(event.target.value)}
        name="Tags"
        className="ml-3"
        id="tag-select"
      >
        <option value="">Please Select a Tag</option>
        {tags.map((tag) => {
          return (
            <option key={tag.id} value={tag.id}>
              {tag.tagName}
            </option>
          );
        })}
      </select>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="isFeatured"
          onChange={() => setIsFeatured(!isFeatured)}
        />
        <label className="form-check-label" htmlFor="isFeatured">
          Featured?
        </label>
      </div>
      <div className="w-md-50">
        <CKEditor
          editor={ClassicEditor}
          data=""
          onChange={(event, editor) => {
            const data = editor.getData();
            setBlogContent(data);
          }}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

interface IAddBlog {}

export default AddBlog;
