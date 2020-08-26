import * as React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const FeaturedDisplay: React.FC<IFeaturedDisplayProps> = (props) => {
  return (
    <Carousel>
      {props.blogs.map((blog: any) => {
        let description = blog.content.replace(/^(.{150}[^\s]*).*/, "$1");
        return (
          <Carousel.Item key={blog.id}>
            <img
              className="d-block w-100 img-fluid"
              src="https://jgxf2r66dr-flywheel.netdna-ssl.com/wp-content/uploads/sites/3/2017/01/gray-box-1.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{blog.title}</h3>
              <p>
                {description}
                <Link to={`/view/${blog.id}`}>
                  <span className="text-muted">...Read More</span>
                </Link>
              </p>
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
