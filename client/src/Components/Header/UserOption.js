import { Col, Dropdown } from "react-bootstrap";
import { FaLastfm, FaPen, FaUser } from "react-icons/fa";
import { RiDraftFill } from "react-icons/ri";
import { MdFavorite, MdSave, MdExitToApp } from "react-icons/md";
import profile from "../../images/profile.png";
const UserOption = () => {
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
            <h3>HamidrezaRamzani</h3>
            <p>hello i am hamidreza ramzani from iran</p>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-1">
            <FaUser />
            Profile
          </Dropdown.Item>
          <Dropdown.Item href="#/action-1">
            <FaPen />
            New Post
          </Dropdown.Item>
          <Dropdown.Item href="#/action-1">
            <FaLastfm />
            Recently Post
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
            <MdExitToApp />
            Exit
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
  );
};
export default UserOption;
