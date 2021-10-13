import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import DataParser from "./DataParser";

//const DataParser = () => import('./DataParser')
//const Dashboard = () => import('./Dashboard')

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={DataParser}>
          <DataParser />
          </Route>
        </Switch>
    </Router>
  );
}