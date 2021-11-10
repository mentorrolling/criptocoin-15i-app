import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...resto }) => {
  console.log(resto);
  const isAuth = localStorage.getItem("auth") || null;
  return (
    <Route
      {...resto}
      render={(props) => {
        console.log(props);
        if (isAuth) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
