import * as React from "react";
import { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { json } from "../../utils/api";
import ArticleCard from "./ArticleCard";

const BoardGames: React.FC<IBoardGames> = (props) => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      let blogs = await json(`/api/blogs/type/BoardGames`);
      setBlogs(blogs);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <h3 className="mt-3 ml-3">Board Games</h3>
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
                description={blog.description}
                gameType={blog.game_type}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

interface IBoardGames extends RouteComponentProps<{ tag: string }> {}

export default BoardGames;
