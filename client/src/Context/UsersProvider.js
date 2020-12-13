import { createContext, useReducer } from "react";
export const LOGIN = "LOGIN_USER";
export const UsersContext = createContext();
const UsersProvider = (props) => {
  const initialState = {};
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case LOGIN: {
        localStorage.setItem("user_pen", JSON.stringify(action.items));
        return {
          auth: true,
          ...action.items,
        };
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
