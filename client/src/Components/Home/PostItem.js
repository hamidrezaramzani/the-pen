import { FaUser } from "react-icons/fa";
import image from "../../images/background-2.jpg";
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

          <div className="post-item-user">
            <h4>
              <FaUser />
              &nbsp; {props.user_id.fullname}
            </h4>
          </div>
          {props.tags.map((item, index) => (
            <div key={index} className="post-category">
              {item.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostItem;
