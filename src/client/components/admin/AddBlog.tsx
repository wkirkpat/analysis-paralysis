import * as React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";

const AddBlog: React.FC<IAddBlog> = () => {
  const [blogContent, setBlogContent] = useState("");
  const [blogTitle, setBlogTitle] = useState("");

  const handleSubmit = () => {
    console.log(blogContent);
    console.log(blogTitle);
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
          data="<p>Hello from CKEditor 5!</p>"
          onInit={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setBlogContent(data);
            console.log(data);
          }}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

interface IAddBlog {}

export default AddBlog;
