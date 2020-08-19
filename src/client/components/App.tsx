import * as React from "react";
import { BrowserRouter as Router, Link, Switch, Route, RouteComponentProps } from "react-router-dom";
import Home from "./public/Home";

const App: React.FC<IAppProps> = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
};

interface IAppProps {}

export default App;
