import { lazy } from "react";
const Home = lazy(() => import("./Components/Home/Home"));
const Register = lazy(() => import("./Components/User/Register"));
const Login = lazy(() => import("./Components/User/Login"));
const Profle = lazy(() => import("./Components/Profile/Profile"));
export const publicRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/sign-in",
    component: Login,
  },
  {
    path: "/sign-up",
    component: Register,
  },
];

export const privateRoutes = [
  {
    path: "/profile",
    component: Profle,
    exact: true,
    levels : ["user" , "admin"]
  },
];
