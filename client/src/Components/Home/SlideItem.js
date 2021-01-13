import profile from "../../images/profile.png";
import Link from "react-router-dom/Link";
const SlideItem = (props) => {
  return (
    <div className="each-slide">
      <img
        src={`http://localhost:8000/public/covers/${props.cover}`}
        alt="a site"
        className="slider-background"
      />
      <div className="slider-content">
        {props.tags.map((item, index) => (
          <Link to="/" key={index} className="slide-show-category">
            {item.value}
          </Link>
        ))}
        <br />
        <br />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="slider-user">
          <img
            src={
              props.user_id.profile
                ? `http://localhost:8000/public/profiles/${props.user_id.profile}`
                : profile
            }
            className="user-profile-slider"
            alt="user slider profile"
          />
          <h4>{props.user_id.fullname}</h4>
          <span>{props.user_id.bio}</span>
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
