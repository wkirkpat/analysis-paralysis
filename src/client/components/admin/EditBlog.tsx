import * as React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { json, User } from "../../utils/api";
import { RouteComponentProps } from "react-router";

const EditBlog: React.FC<IEditBlog> = (props) => {
  const [blogContent, setBlogContent] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDesc, setBlogDesc] = useState("");
  const [tags, setTags] = useState([]);
  const [blogTag, setBlogTag] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [blog, setBlog] = useState([]);

  const getBlog = async () => {
    try {
      let blog = await json(`/api/blogs/view/${props.match.params.id}`);
      setBlog(blog);
    } catch (e) {
      throw e;
    }
  };

  const handleSubmit = async () => {
    let content = DOMPurify.sanitize(blogContent);
    setBlogContent(content);
    try {
      let results = await json(
        `/api/blogs/edit/${props.match.params.id}`,
        "PUT",
        {
          content: blogContent,
          title: blogTitle,
          description: blogDesc,
          authorid: blog[0].authorid,
          tag: blogTag,
        }
      );
      let blogId = results.insertId;
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
    getBlog();
  }, []);

  return (
    <>
      <h3>New Blog</h3>
      <input
        type="text"
        placeholder={blog[0]?.title}
        onChange={(event) => setBlogTitle(event.target.value)}
      ></input>
      <input
        type="text"
        placeholder={blog[0]?.description}
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
            <option key={tag.id} value={tag.tagName}>
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
          data={blog[0]?.content}
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

interface IEditBlog extends RouteComponentProps<{ id: string }> {}

export default EditBlog;
