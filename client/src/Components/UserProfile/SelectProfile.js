const SelectProfile = (props) => {
  const getUserProfile = () => {
    const IMAGES_PATH = "http://localhost:8000/public/images/";
    return props.img ? IMAGES_PATH + props.img : IMAGES_PATH + "user.png";
  };
  return (
    <div className="select-profile">
      <img src={getUserProfile()} alt="user profile" />
      <br />
      <input type="file" name="profile"  />
    </div>
  );
};

export default SelectProfile;
