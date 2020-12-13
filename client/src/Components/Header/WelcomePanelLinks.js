const { FaUser } = require("react-icons/fa");
const { Link } = require("react-router-dom");
const WelcomePanelLinks = () => {
  return (
    <div className="links">
      <Link to="/panel" className="text-warning">
        <FaUser />
        Panel
      </Link>
    </div>
  );
};

export default WelcomePanelLinks;
