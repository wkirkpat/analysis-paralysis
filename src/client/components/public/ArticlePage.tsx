import * as React from "react";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { json } from "../../utils/api";
import { RouteComponentProps, Link } from "react-router-dom";
import AuthorCard from "./AuthorCard";
import moment from "moment";

const ArticlePage: React.FC<IArticlePageProps> = (props) => {
  const [blog, setBlog] = useState([]);
  const [date, setDate] = useState("");

  const getBlog = async () => {
    try {
      let blog = await json(`/api/blogs/view/${props.match.params.id}`);
      setBlog(blog);
    } catch (e) {
      throw e;
    }
  };

  const getDate = () => {
    let newDate = moment(blog[0]?._created).format("YYYY-MM-DD");
    setDate(newDate);
  };

  const createMarkup = (content: string) => {
    return { __html: content };
  };

  useEffect(() => {
    getBlog();
    getDate();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <h3>{blog[0]?.title}</h3>
      </div>
      <p className="d-flex text-muted justify-content-center">
        Posted on: {date}
      </p>
      <hr className="mx-3" />
      <AuthorCard blog={blog} />
      <hr className="mx-3" />
      <div
        className="mx-3"
        dangerouslySetInnerHTML={createMarkup(blog[0]?.content)}
      ></div>
    </>
  );
};

interface IArticlePageProps extends RouteComponentProps<{ id: string }> {}

export default ArticlePage;
