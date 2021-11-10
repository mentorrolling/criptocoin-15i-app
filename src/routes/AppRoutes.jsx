import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import ErrorScreen from "../pages/ErrorScreen";
import HomeScreen from "../pages/HomeScreen";
import LoginScreen from "../pages/LoginScreen";
import CoinScreen from "../pages/CoinScreen";

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <ProtectedRoute exact path="/" component={HomeScreen} />
        <ProtectedRoute exact path="/coin/:id" component={CoinScreen} />
        <Route component={ErrorScreen} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
