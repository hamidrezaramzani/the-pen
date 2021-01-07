import axios from "../axios/default";

// user requests
export const checkDuplicateFieldValue = (options) =>
  axios.get(`users/check-field/${options.field}/${options.value}`);
export const register = (data) => axios.post(`users/register`, data);
export const login = (data) => axios.post(`users/login`, data);
export const changePassword = (data) =>
  axios.patch(`users/change-password`, data);
export const getUser = (id) => axios.get(`users/user/${id}`);
export const updateProfile = (data) =>
  axios.post(`users/update-profile`, data, {
    headers: {
      "Content-type": "multipart-formdata",
    },
  });

// post requests
export const newPost = (data) =>
  axios.post(`posts/new-post`, data, {
    headers: {
      "Content-type": "multipart-formdata",
    },
  });

export const posts = () => axios.get(`posts/posts`);
export const postSlides = () => axios.get(`posts/post-slides`);
export const userPosts = (id) => axios.get(`posts/user_posts/${id}`);
