import { Dropdown } from "react-bootstrap";
import { FaEdit , FaTrash  } from "react-icons/fa";
const PostItemDropDown = () => {
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
        <Dropdown.Item href="#/action-1"><FaEdit /> Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-2"><FaTrash /> Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default PostItemDropDown;
