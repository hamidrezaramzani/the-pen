import background from "../../images/slide.jpg";
import profile from "../../images/profile.png";
import Link from "react-router-dom/Link";
const SlideItem = () => {
  return (
    <div className="each-slide">
      <img src={background} alt="a site" className="slider-background" />
      <div className="slider-content">
        <Link to="/" className="slide-show-category">Music</Link>
        <br />
        <br />
        <h3>A Fake Post</h3>
        <p>we have a fake post on here for put text in our site ...</p>
        <div className="slider-user">
          <img
            src={profile}
            className="user-profile-slider"
            alt="user slider profile"
          />
          <h4>Hamidreza Ramzani</h4>
          <span>Last Week</span>
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
