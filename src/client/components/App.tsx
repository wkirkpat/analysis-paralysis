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

const App: React.FC<IAppProps> = () => {
  return (
    <>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/article/:id" component={ArticlePage} />
          </Switch>
        </>
      </Router>
    </>
  );
};

interface IAppProps {}

export default App;
