import moment from "moment";
import { FaClock } from "react-icons/fa";
import PostItemDropDown from "./PostItemDropDown";
import { Link } from "react-router-dom";
const PostItem = ({ _id, title, description, createAt }) => {
  return (
    <li>
      <h3>
        <Link to={`/post/${_id}`}>{title}</Link>
        <PostItemDropDown id={_id} />
      </h3>

      <p>{description}</p>
      <span>
        <FaClock /> &nbsp;
        {moment.unix(createAt).format("YYYY/MM/DD h:mm:ss a")}
      </span>
    </li>
  );
};

export default PostItem;
