import { Dropdown } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import swal from "../swal";
import { useMutation, queryCache } from "react-query";
import { deletePost } from "../requests";
import { useContext } from "react";
import { UsersContext } from "../../Context/UsersProvider";
import Loading from "../FormLoading";
const PostItemDropDown = ({ id }) => {
  const { state } = useContext(UsersContext);
  const [mutate, { isLoading }] = useMutation(deletePost, {
    onSuccess: () => {
      const data = queryCache.getQueryData(["user_posts", state.user._id]);
      queryCache.setQueryData(["user_posts", state.user._id], {
        data: data.data.filter((item) => item._id != id),
      });
    },
  });
  const remove = () => {
    swal
      .fire({
        title: "delete? really?",
        html: "do you wanna remove this post?",
        icon: "error",
        showCancelButton: true,
      })
      .then(async ({ value }) => {
        if (value) {
          await mutate({ id, userid: state.user._id });
        }
      });
  };
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
        <Dropdown.Item href="#/action-1">
          <Link to={`/post/${id}`}>
            <FaEdit /> Edit
          </Link>
        </Dropdown.Item>

        
          <button className="dropdown-item btn text-danger btn-sm btn-danger" onClick={remove}>
            <FaTrash /> Delete
            <Loading isLoading={isLoading} />
          </button>
        
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default PostItemDropDown;
