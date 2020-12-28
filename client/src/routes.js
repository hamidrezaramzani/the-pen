import { lazy } from "react";
const Home = lazy(() => import("./Components/Home/Home"));
const Register = lazy(() => import("./Components/User/Register"));
const Login = lazy(() => import("./Components/User/Login"));
const NewPost = lazy(() => import("./Components/NewPost/NewPost"));
const Posts = lazy(() => import("./Components/Posts/Posts"));
const Profile = lazy(() => import("./Components/UserProfile/Profile"));
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
    path: "/new-post",
    component: NewPost,
    levels: ["user", "admin"],
  },
  {
    path: "/posts",
    component: Posts,
    levels: ["user", "admin"],
  },
  {
    path: "/profile",
    component: Profile,
    levels: ["user", "admin"],
  },
];
