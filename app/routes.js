import Home from "./home/home";
import News from "./news";

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
