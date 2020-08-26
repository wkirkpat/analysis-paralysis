import * as React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  RouteComponentProps,
} from "react-router-dom";
import Home from "./public/Home";
import Navbar from "./shared/Navbar";
import ArticlePage from "./public/ArticlePage";
import AuthorProfile from "./public/AuthorProfile";
import BlogsByTag from "./public/BlogsByTag";

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
          </Switch>
        </>
      </Router>
    </>
  );
};

interface IAppProps {}

export default App;
