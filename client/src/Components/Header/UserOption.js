import { Col, Dropdown } from "react-bootstrap";
import { FaLastfm, FaPen, FaUser } from "react-icons/fa";
import { RiDraftFill } from "react-icons/ri";
import { MdFavorite, MdSave, MdExitToApp } from "react-icons/md";
import profile from "../../images/profile.png";
import { useContext } from "react";
import { UsersContext } from "../../Context/UsersProvider";
import { Link } from "react-router-dom";
const UserOption = () => {
  const user = useContext(UsersContext);
  return (
    <Col xs="12" md="1">
      <Dropdown>
        <Dropdown.Toggle id="user-option-dropdown">
          <img src={profile} alt="user profile" />
        </Dropdown.Toggle>

        <Dropdown.Menu className="user-dropdown-menu">
          <Dropdown.Item href="#/action-1">
            <img
              src={profile}
              className="user-profile-img"
              alt="user profile"
            />
            <h3>{user.state.user.fullname}</h3>
            <p>hello i am hamidreza ramzani from iran</p>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/profile">
              <FaUser />
              Profile
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/new-post">
              <FaPen />
              New Post
            </Link>
          </Dropdown.Item>

          <Dropdown.Item href="#/action-1">
            <Link to="/posts">
              <FaLastfm />
              Recently Post
            </Link>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-1">
            <RiDraftFill />
            Drafts
          </Dropdown.Item>
          <Dropdown.Item href="#/action-1">
            <MdFavorite />
            Favorites
          </Dropdown.Item>
          <Dropdown.Item href="#/action-1">
            <MdSave />
            Saved Posts
          </Dropdown.Item>
          <Dropdown.Item href="#/action-1">
            <Link to="/logout">
              <MdExitToApp />
              Exit
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
  );
};
export default UserOption;
