import { FaTimes } from "react-icons/fa";

const PostTagItem = (props) => {
  return (
    <li>
      {props.title}
      <button>
        <FaTimes />
      </button>
    </li>
  );
};
export default PostTagItem;
