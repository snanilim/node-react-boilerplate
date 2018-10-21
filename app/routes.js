import Home from "./Home/Home";


const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    isAuthenticated: true,
  }
];

export default routes;
