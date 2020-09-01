import * as React from "react";
import Media from "react-bootstrap/Media";
import { json } from "../../utils/api";
import { RouteComponentProps } from "react-router";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import ArticleCard from "./ArticleCard";

const AuthorProfile: React.FC<IAuthorProfileProps> = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [author, setAuthor] = useState([]);

  const getAuthor = async () => {
    try {
      let author = await json(`/api/users/${props.match.params.id}`);
      setAuthor(author);
    } catch (e) {
      throw e;
    }
  };

  const getBlogs = async () => {
    try {
      let blogs = await json(`/api/users/blogs/${props.match.params.id}`);
      setBlogs(blogs);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    getBlogs();
    getAuthor();
  }, []);

  return (
    <>
      <div className="p-4">
        <Media className="mx-md-5">
          <div className="align-self-start">
            <img
              width={64}
              height={64}
              className="mr-3 align-self-center"
              src="https://jgxf2r66dr-flywheel.netdna-ssl.com/wp-content/uploads/sites/3/2017/01/gray-box-1.png"
              alt="Author Thumbnail"
            />
          </div>
          <Media.Body>
            <h3>
              {author[0]?.firstName} {author[0]?.lastName}
            </h3>
            <p>Author Bio</p>
          </Media.Body>
        </Media>
      </div>
      <hr />
      <div>
        <h5 className="ml-3">Other Stuff By Me</h5>
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
      </div>
    </>
  );
};

interface IAuthorProfileProps extends RouteComponentProps<{ id: string }> {}

export default AuthorProfile;
