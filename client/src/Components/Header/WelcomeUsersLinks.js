const { FaUser, FaSignInAlt } = require("react-icons/fa");
const { Link } = require("react-router-dom");
const WelcomeUsersLinks = () => {
  return (
    <div className="links">
      <Link to="/sign-up" className="text-warning">
        <FaUser />
        SIGN UP
      </Link>
      <Link to="/sign-in" className="text-info">
        <FaSignInAlt />
        SIGN IN
      </Link>
    </div>
  );
};

export default WelcomeUsersLinks;
