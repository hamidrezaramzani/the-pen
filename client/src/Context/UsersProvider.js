import { createContext, useReducer } from "react";
export const LOGIN = "LOGIN_USER";
export const UsersContext = createContext();
const UsersProvider = (props) => {
  let user = localStorage.getItem("user_pen");
  if (user) user = JSON.parse(localStorage.getItem("user_pen"));
  const initialState = user;
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case LOGIN: {
        const data = {
          auth: true,
          ...action.items,
        };
        localStorage.setItem("user_pen", JSON.stringify(data));
        return data;
      }
      default:
        return state;
    }
  }, initialState);
  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
