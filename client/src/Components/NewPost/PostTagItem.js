import { FaTimes } from "react-icons/fa";

const PostTagItem = ({ title, setTags, tags, id }) => {
  const onRemove = () => {
    setTags(tags.filter((tag) => tag.id != id));
  };
  return (
    <li>
      {title}
      <button type="button" onClick={onRemove}>
        <FaTimes />
      </button>
    </li>
  );
};
export default PostTagItem;
