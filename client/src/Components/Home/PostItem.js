import image from "../../images/background.jpg";
import { FaPen } from "react-icons/fa";
const PostItem = () => {
  return (
    <div className="post-item">
      <img src={image} alt="post item" />
      <h3>Fuck Your Ideas</h3>
      <p>
        hamidrezaramzani
        <FaPen />
      </p>
    </div>
  );
};

export default PostItem;
