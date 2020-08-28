import * as React from "react";
import Media from "react-bootstrap/Media";
import { Link } from "react-router-dom";

const AuthorCard: React.FC<IAuthorCardProps> = (props) => {
  return (
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
            <Link to={`/profile/${props.blog[0]?.authorid}`}>
              <span className="text-muted ul">
                {props.blog[0]?.firstName} {props.blog[0]?.lastName}
              </span>
            </Link>
          </h6>
        </Media.Body>
      </Media>
    </div>
  );
};

interface IAuthorCardProps {
  blog: any;
}

export default AuthorCard;
