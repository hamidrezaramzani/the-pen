import { useContext } from "react";
import { UsersContext } from "../Context/UsersProvider";
import propTypes from "prop-types";
import { Route } from "react-router-dom";
const PrivateRoute = ({ levels, ...items }) => {
  const user = useContext(UsersContext);
  const level = user.state.user.level;
  if (user.state.auth && levels.includes(level)) {
    return <Route {...items} />;
  }
};

PrivateRoute.propTypes = {
  path: propTypes.string.isRequired,
  component: propTypes.element.isRequired,
  levels: propTypes.array.isRequired,
  exact: propTypes.bool,
};

export default PrivateRoute;
