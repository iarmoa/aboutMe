import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import AboutMePage from './pages/AboutMePage';

function App() {
  return (
    <Router basename={"/"}>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={AboutMePage} />
        <Route component={AboutMePage} />
      </Switch>
    </Router>
  );
}

export default App;
