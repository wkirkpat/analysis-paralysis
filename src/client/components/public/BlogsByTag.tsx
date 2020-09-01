import * as React from "react";
import { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { json } from "../../utils/api";
import ArticleCard from "./ArticleCard";

const BlogsByTag: React.FC<IBlogsByTag> = (props) => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      let blogs = await json(`/api/blogs/tag/${props.match.params.tag}`);
      setBlogs(blogs[0]);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <h3 className="mt-3 ml-3">{props.match.params.tag}</h3>
      <div className="justify-content-center col-md-8 mx-md-auto">
        {blogs.map((blog) => {
          return (
            <div key={blog.id}>
              <ArticleCard
                title={blog.title}
                content={blog.content}
                firstName={blog.firstName}
                lastName={blog.lastName}
                authorid={blog.authorid}
                id={blog.id}
                date={blog._created}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

interface IBlogsByTag extends RouteComponentProps<{ tag: string }> {}

export default BlogsByTag;
