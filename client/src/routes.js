import { lazy } from "react";
import Logout from "./Components/User/Logout";
import UserInfo from "./Components/User/UserInfo";
const Home = lazy(() => import("./Components/Home/Home"));
const Register = lazy(() => import("./Components/User/Register"));
const Login = lazy(() => import("./Components/User/Login"));
const NewPost = lazy(() => import("./Components/NewPost/NewPost"));
const Posts = lazy(() => import("./Components/Posts/Posts"));
const Profile = lazy(() => import("./Components/UserProfile/Profile"));
const PostsTag = lazy(() => import("./Components/PostsTag/PostsTag"));
export const publicRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/posts-by-tag/:tag",
    component:PostsTag,
  },
  {
    path: "/sign-in",
    component: Login,
  },
  {
    path: "/sign-up",
    component: Register,
  },

  {
    path: "/logout",
    component: Logout,
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
  {
    path: "/user-info/:id",
    component: UserInfo,
    levels: ["user", "admin"],
  },
];
