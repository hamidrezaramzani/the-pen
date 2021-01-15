import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import moment from "moment";
const PostItem = (props) => {
  return (
    <div className="col-12 col-md-3 col-lg-4 p-2">
      <div className="post-item">
        <div className="post-item-image">
          {props.cover ? (
            <img
              src={`http://localhost:8000/public/covers/${props.cover}`}
              alt="post item"
            />
          ) : (
            []
          )}
        </div>
        <div className="post-item-content">
          <p> {moment.unix(props.createAt).format("YYYY/MM/DD h:mm:ss a")}</p>
          <h2>{props.title}</h2>
          <p>{props.description}</p>

          <Link to={`/user-info/` + props.user_id._id}>
            <div className="post-item-user">
              <h4>
                <FaUser />
                &nbsp; {props.user_id.fullname}
              </h4>
            </div>
          </Link>
          {props.tags.map((item, index) => (
            <div key={index} className="post-category">
              <Link className="text-light" to={`/posts-by-tag/${item.value}`}>{item.value}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostItem;
