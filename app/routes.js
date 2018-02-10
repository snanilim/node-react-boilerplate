import Home from "./Home/Home";
import News from "./News/News";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    isAuthenticated: true,
  },
  {
    path: "/login",
    component: Home,
    isAuthenticated: true,
  },
  {
    path: "/news",
    component: News,
    isAuthenticated: true,
  }
];

export default routes;
