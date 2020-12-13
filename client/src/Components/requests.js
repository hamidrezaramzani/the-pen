import axios from "../axios/default";
export const checkDuplicateFieldValue = (options) =>
  axios.get(`users/check-field/${options.field}/${options.value}`);
export const register = (data) => axios.post(`users/register`,data);
export const login = (data) => axios.post(`users/login`,data);
