import { Link } from "react-router-dom";

const NewPostTitle = () => {
  return (
    <>
      <h2 className="d-block my-2 text-light moon">
        Write New Post
        <Link className="btn btn-sm btn-warning float-right" to="/posts">
          Posts
        </Link>
      </h2>
      <br />
    </>
  );
};

export default NewPostTitle;
