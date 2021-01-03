import { useContext, useEffect } from "react";
import { UsersContext, LOGOUT } from "../../Context/UsersProvider";
import { Redirect } from "react-router-dom";
const Logout = () => {
  const { state, dispatch } = useContext(UsersContext);
  useEffect(() => {
    if (state.auth) {
      dispatch({
        type: LOGOUT,
      });
    }
  });
  return <Redirect to="/"  />;
};

export default Logout;
