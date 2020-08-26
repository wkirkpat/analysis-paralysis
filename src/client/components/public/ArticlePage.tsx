import * as React from "react";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { json } from "../../utils/api";
import { RouteComponentProps, Link } from "react-router-dom";
import Media from "react-bootstrap/Media";

const ArticlePage: React.FC<IArticlePageProps> = (props) => {
  const [blog, setBlog] = useState([]);

  const getBlog = async () => {
    try {
      let blog = await json(`/api/blogs/view/${props.match.params.id}`);
      setBlog(blog);
      console.log(blog[0]);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
  });

  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <h3>{blog[0]?.title}</h3>
      </div>
      <hr className="mx-3" />
      <div className="d-flex ml-4">
        <Media className="mx-md-5">
          <img
            width={64}
            height={64}
            className="mr-3 align-self-center"
            src="https://jgxf2r66dr-flywheel.netdna-ssl.com/wp-content/uploads/sites/3/2017/01/gray-box-1.png"
            alt="Author Thumbnail"
          />
          <Media.Body>
            <h6 className="card-subtitle mb-2 text-muted">
              By:{" "}
              <Link to={`/profile/${blog[0]?.authorid}`}>
                <span className="text-muted ul">
                  {blog[0]?.firstName} {blog[0]?.lastName}
                </span>
              </Link>
            </h6>
          </Media.Body>
        </Media>
      </div>
      <hr className="mx-3" />
      <div className="mx-3">
        <p>{blog[0]?.content}</p>
      </div>
    </>
  );
};

interface IArticlePageProps extends RouteComponentProps<{ id: string }> {}

export default ArticlePage;
