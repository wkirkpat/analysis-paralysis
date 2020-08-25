import * as React from "react";
import Media from "react-bootstrap/Media";
import Badge from "react-bootstrap/Badge";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { json } from "../../utils/api";
import { Link } from "react-router-dom";

const ArticleCard: React.FC<IArticleCardProps> = (props) => {
  const [tags, setTags] = useState([]);

  const getTags = async () => {
    try {
      let tags = await json(`/api/tags/${props.id}`);
      setTags(tags[0]);
      console.log(tags);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    getTags();
  }, []);

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
  });

  let description = props.content.replace(/^(.{150}[^\s]*).*/, "$1");
  return (
    <>
      <hr className="mx-2" />
      <Media className="mx-md-5">
        <img
          width={128}
          height={128}
          className="mr-3 align-self-center"
          src="https://jgxf2r66dr-flywheel.netdna-ssl.com/wp-content/uploads/sites/3/2017/01/gray-box-1.png"
          alt="Article Thumbnail"
        />
        <Media.Body>
          <Badge className="bg-tag mb-2">{tags[0]?.tagName}</Badge>
          <h5>{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            By: {props.firstName} {props.lastName}
          </h6>
          <p>
            {description}
            <Link to={`/article/${props.id}`}>
              <span className="text-muted">...Read More</span>
            </Link>
          </p>
        </Media.Body>
      </Media>
    </>
  );
};

interface IArticleCardProps {
  title: string;
  content: string;
  firstName: string;
  lastName: string;
  id: string;
}

export default ArticleCard;
