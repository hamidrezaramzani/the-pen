import image from "../../images/background.jpg";
import { FaClock } from "react-icons/fa";
const PostListItem = () => {
  return (
    <div className="post-list-item">
      <img src={image} alt="post item" />
      <h3>Fuck Your Ideas</h3>
      <p>
        Novamber 26 , 2020 01:41
        <FaClock />
      </p>
      <div className="post-item-category">Music</div>
    </div>
  );
};

export default PostListItem;
