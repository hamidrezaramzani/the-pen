import { useContext } from "react";
import { UsersContext } from "../Context/UsersProvider";
export const useUserId = () => {
  const user = useContext(UsersContext);
  return user.state.auth ? user.state.user._id : null;
};
