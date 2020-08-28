import * as React from "react";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { json } from "../../utils/api";
import { RouteComponentProps, Link } from "react-router-dom";
import AuthorCard from "./AuthorCard";

const ArticlePage: React.FC<IArticlePageProps> = (props) => {
  const [blog, setBlog] = useState([]);

  const getBlog = async () => {
    try {
      let blog = await json(`/api/blogs/view/${props.match.params.id}`);
      setBlog(blog);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <h3>{blog[0]?.title}</h3>
      </div>
      <hr className="mx-3" />
      <AuthorCard blog={blog} />
      <hr className="mx-3" />
      <div className="mx-3">
        <p>{blog[0]?.content}</p>
      </div>
    </>
  );
};

interface IArticlePageProps extends RouteComponentProps<{ id: string }> {}

export default ArticlePage;
