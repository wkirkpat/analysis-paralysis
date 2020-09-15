import * as React from "react";
import Media from "react-bootstrap/Media";
import Badge from "react-bootstrap/Badge";
import { useEffect, useState } from "react";
import { json } from "../../utils/api";
import { Link } from "react-router-dom";
import moment from "moment";
import BoardGames from "./BoardGames";

const ArticleCard: React.FC<IArticleCardProps> = (props) => {
  const [tags, setTags] = useState([]);
  const [time, setTime] = useState("");
  const [type, setType] = useState("");

  const getTime = () => {
    let newTime = moment(props.date).format("YYYY-MM-DD");
    newTime = moment(newTime).fromNow();
    setTime(newTime);
  };

  const getTags = async () => {
    try {
      let tags = await json(`/api/tags/${props.id}`);
      setTags(tags[0]);
    } catch (e) {
      throw e;
    }
  };

  const getType = () => {
    if (props.gameType == "BoardGames") {
      setType("Board Games");
    } else {
      setType("Video Games");
    }
  };

  const createMarkup = (description: string) => {
    return { __html: description };
  };

  useEffect(() => {
    getTags();
    getTime();
    getType();
  }, []);

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
          <Link className="text-dark" to={`/tags/${tags[0]?.tagName}`}>
            <Badge className="bg-tag mb-2">{tags[0]?.tagName}</Badge>
          </Link>{" "}
          <Link className="text-dark" to={`/${type}`}>
            <Badge className="bg-tag mb-2">{type}</Badge>
          </Link>{" "}
          <h5>{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            By:{" "}
            <Link to={`/profile/${props.authorid}`}>
              <span className="text-muted">
                {props.firstName} {props.lastName}
              </span>
            </Link>
          </h6>
          <div dangerouslySetInnerHTML={createMarkup(props.description)}></div>
          <Link to={`/view/${props.id}`}>
            <span className="text-muted">...Read More</span>
          </Link>
          <p className="text-muted">{time}</p>
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
  authorid: string;
  date: string;
  description: string;
  gameType: string;
}

export default ArticleCard;
