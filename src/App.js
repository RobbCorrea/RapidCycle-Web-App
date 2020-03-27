import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* import Admin from "./pages/Admin";
import AdminHome from "./pages/Admin";
import SignIn from "./pages/Admin/SignIn.js";
import Home from "./pages/Home.js";
import Contacts from "./pages/Contacs.js"; */
import routes from "./config/routes.js";
import RouteWithSubRoutes from "./components/RouteWSubroutes.js";

import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <RouteWithSubRoutes key={index} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
