import * as React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const FeaturedDisplay: React.FC<IFeaturedDisplayProps> = (props) => {
  return (
    <Carousel>
      {props.blogs.map((blog: any) => {
        return (
          <Carousel.Item key={blog.id}>
            <img
              className="d-block w-100 h-50 img-fluid"
              src="https://jgxf2r66dr-flywheel.netdna-ssl.com/wp-content/uploads/sites/3/2017/01/gray-box-1.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <Link to={`/view/${blog.id}`}>
                <h3 className="text-dark">{blog.title}</h3>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

interface IFeaturedDisplayProps {
  blogs: any;
}

export default FeaturedDisplay;
