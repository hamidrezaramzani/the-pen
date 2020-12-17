import { useRef, useState } from "react";
import PostTagItem from "./PostTagItem";
import swal from "../swal";
const PostTags = () => {
  const [state, setState] = useState([]);

  const getId = () => (state.length ? state[state.length - 1].id + 1 : 1);
  const tagInputRef = useRef(null);
  const addTagHandler = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (state.length <= 4) {
        setState([...state, { value: e.target.value.trim(), id: getId() }]);
        tagInputRef.current.value = "";
      } else {
        swal.fire({
          title: "Error",
          html: "It can be only 5 numbers",
          icon: "error",
        });
      }
    }
  };
  return (
    <div className="post-tags">
      <ul>
        {state.map((item, index) => (
          <PostTagItem key={index} title={item.value} />
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
