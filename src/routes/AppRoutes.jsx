import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorScreen from "../pages/ErrorScreen";
import HomeScreen from "../pages/HomeScreen";
import LoginScreen from "../pages/LoginScreen";

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/" component={HomeScreen} />
        <Route component={ErrorScreen} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
