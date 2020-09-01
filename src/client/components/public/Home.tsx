import * as React from "react";
import FeaturedDisplay from "./FeaturedDisplay";
import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import { json } from "../../utils/api";

const Home: React.FC<IHomeProps> = () => {
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      let blogs = await json("/api/blogs");
      setBlogs(blogs);
    } catch (e) {
      throw e;
    }
  };

  const getFeatured = async () => {
    try {
      let featured = await json("/api/blogs/featured");
      setFeaturedBlogs(featured);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    getBlogs();
    getFeatured();
  }, []);

  return (
    <>
      <FeaturedDisplay blogs={featuredBlogs} />
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

interface IHomeProps {}

export default Home;
