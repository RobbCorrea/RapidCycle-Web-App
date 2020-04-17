import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
/* import Admin from "./pages/Admin";
import AdminHome from "./pages/Admin";
import SignIn from "./pages/Admin/SignIn.js";
import Home from "./pages/Home.js";
import Contacts from "./pages/Contacts.js"; */
import AuthProvider from "./providers/AuthProvider";
import routes from "./config/routes.js";
import RouteWithSubRoutes from "./components/RouteWSubroutes.js";

import "./scss/App.scss";

function App() {
  return (
    /* Everything is wrapped inside AuthProvider 
    so that whenever the user performs an action, 
    it will always execute and thus we'll know 
    if the user is logged in. */
    <AuthProvider>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <RouteWithSubRoutes key={index} {...route} />
          ))}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
