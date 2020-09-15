import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./public/Home";
import Navbar from "./shared/Navbar";
import ArticlePage from "./public/ArticlePage";
import AuthorProfile from "./public/AuthorProfile";
import BlogsByTag from "./public/BlogsByTag";
import AddBlog from "./admin/AddBlog";
import Login from "./admin/Login";
import Register from "./admin/Register";
import EditBlog from "./admin/EditBlog";
import BoardGames from "./public/BoardGames";
import VideoGames from "./public/VideoGames";

const App: React.FC<IAppProps> = () => {
  return (
    <>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/view/:id" component={ArticlePage} />
            <Route path="/profile/:id" component={AuthorProfile} />
            <Route path="/tags/:tag" component={BlogsByTag} />
            <Route path="/add" component={AddBlog} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/edit/:id" component={EditBlog} />
            <Route path="/boardgames" component={BoardGames} />
            <Route path="/videogames" component={VideoGames} />
          </Switch>
        </>
      </Router>
    </>
  );
};

interface IAppProps {}

export default App;
