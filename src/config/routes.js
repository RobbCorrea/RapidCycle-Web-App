//Importing Collector or Admin Layout
import LayoutCollector from "../layouts/LayoutCollector";
//Basic Recycler or User Layout
import LayoutRecycler from "../layouts/LayoutRecycler";

//Admin Pages
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";
import AdminUsers from "../pages/Admin/Users";

//User Pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";

//Error
import Error404 from "../pages/404Error";

//It's done. Now I can add any route I want following my own object template
//and all routes shall work. It will render whichever route I type
//on the browser. After I code a render for it, of course.
const routes = [
  {
    path: "/admin",
    component: LayoutCollector,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: AdminHome,
        exact: true
      },
      {
        path: "/admin/login",
        component: AdminSignIn,
        exact: true
      },
      {
        path: "/admin/users",
        component: AdminUsers,
        exact: true
      },
      {
        component: Error404
      }
    ]
  },
  {
    path: "/",
    component: LayoutRecycler,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true
      },
      {
        path: "/contact",
        component: Contact,
        exact: true
      },
      {
        component: Error404
      }
    ]
  }
];

export default routes;
