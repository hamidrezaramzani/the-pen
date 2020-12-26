import moment from "moment";
import { FaClock } from "react-icons/fa";
import PostItemDropDown from "./PostItemDropDown";
import { Link } from "react-router-dom";
const PostItem = ({ _id, title, description, createAt }) => {
  return (
    <li>
      <Link to={`/post/${_id}`}>
        <h3>
          {title}
          <PostItemDropDown />
        </h3>
      </Link>
      <p>{description}</p>
      <span>
        <FaClock /> &nbsp;
        {moment.unix(createAt).format("YYYY/MM/DD h:mm:ss a")}
      </span>
    </li>
  );
};

export default PostItem;
