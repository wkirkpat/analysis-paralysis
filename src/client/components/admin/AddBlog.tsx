import * as React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import DOMPurify from "dompurify";
import { json } from "../../utils/api";

const AddBlog: React.FC<IAddBlog> = () => {
  const [blogContent, setBlogContent] = useState("");
  const [blogTitle, setBlogTitle] = useState("");

  const handleSubmit = async () => {
    let content = DOMPurify.sanitize(blogContent);
    setBlogContent(content);
    try {
      let results = await json("/api/blogs/add", "POST", {});
    } catch (e) {
      throw e;
    }
  };

  const createMarkup = (content: string) => {
    return { __html: content };
  };

  return (
    <>
      <h3>New Blog</h3>

      <input
        type="text"
        placeholder="Enter Title..."
        onChange={(event) => setBlogTitle(event.target.value)}
      ></input>
      <div className="w-md-50">
        <CKEditor
          editor={ClassicEditor}
          data=""
          onInit={(editor: any) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(editor: any) => {
            const data = editor.getData();
            setBlogContent(data);
            console.log(data);
          }}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <div dangerouslySetInnerHTML={createMarkup(blogContent)}></div>
    </>
  );
};

interface IAddBlog {}

export default AddBlog;
