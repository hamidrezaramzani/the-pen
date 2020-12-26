import { Dropdown } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const PostItemDropDown = ({ id }) => {
  return (
    <Dropdown className="float-right">
      <Dropdown.Toggle
        variant="default"
        className="text-light"
        id="PostItemDropDown"
      >
        ...
      </Dropdown.Toggle>

      <Dropdown.Menu className="PostItemDropDownMenu">
        <Dropdown.Item>
          <FaTrash /> Delete
        </Dropdown.Item>
        <Dropdown.Item href="">
          <Link to={`/edit-post/${id}`}>
            <FaEdit /> Edit
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default PostItemDropDown;
