import React from "react";
import { Route } from "react-router-dom";

//Instead of a const { props } = props; I'll just destructure in the params.
function LoadRoutes({ routes }) {
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      component={route.component}
      exact={route.exact}
    />
  ));
}

export default LoadRoutes;
