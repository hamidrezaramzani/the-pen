import { useRef } from "react";
import PostTagItem from "./PostTagItem";
import swal from "../swal";
const PostTags = ({ tags, setTags }) => {
  const getId = () => (tags.length ? tags[tags.length - 1].id + 1 : 1);
  const tagInputRef = useRef(null);
  const addTagHandler = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (!e.target.value) {
        swal.fire({
          title: "Error",
          html: "It can not be empty",
          icon: "error",
        });
        return;
      } else {
        if (tags.length <= 4) {
          setTags([...tags, { value: e.target.value.trim(), id: getId() }]);
          tagInputRef.current.value = "";
        } else {
          swal.fire({
            title: "Error",
            html: "It can be only 5 numbers",
            icon: "error",
          });
        }
      }
    }
  };

  return (
    <div className="post-tags">
      <ul>
        {tags.map((item, index) => (
          <PostTagItem
            key={index}
            id={item.id}
            tags={tags}
            setTags={setTags}
            title={item.value}
          />
        ))}

        <li>
          <input
            type="text"
            name="tag"
            onKeyDown={addTagHandler}
            placeholder="Add Tag Here"
            ref={tagInputRef}
          />
        </li>
      </ul>
    </div>
  );
};

export default PostTags;
