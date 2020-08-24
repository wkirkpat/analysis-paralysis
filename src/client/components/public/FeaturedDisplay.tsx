import * as React from "react";
import Carousel from "react-bootstrap/Carousel";

const FeaturedDisplay: React.FC<IFeaturedDisplayProps> = (props) => {
  return (
    <Carousel>
      {props.blogs.map((blog) => {
        let description = blog.content.replace(/^(.{150}[^\s]*).*/, "$1");
        return (
          <Carousel.Item key={blog.id}>
            <img
              className="d-block w-100"
              src="https://jgxf2r66dr-flywheel.netdna-ssl.com/wp-content/uploads/sites/3/2017/01/gray-box-1.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{blog.title}</h3>
              <p>
                {description}
                <span className="text-muted">...Read More</span>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://jgxf2r66dr-flywheel.netdna-ssl.com/wp-content/uploads/sites/3/2017/01/gray-box-1.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://jgxf2r66dr-flywheel.netdna-ssl.com/wp-content/uploads/sites/3/2017/01/gray-box-1.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};

interface IFeaturedDisplayProps {
  blogs: any;
}

export default FeaturedDisplay;
