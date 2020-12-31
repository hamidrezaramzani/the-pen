import swal from "../swal";
import { ProfileContext } from "../../Context/ProfileProvider";
import { useContext } from "react";
const SelectProfile = (props) => {
  const { setState } = useContext(ProfileContext);
  const getUserProfile = () => {
    const IMAGES_PATH = "http://localhost:8000/public/profiles/";
    return props.img ? IMAGES_PATH + props.img : IMAGES_PATH + "user.png";
  };
  const SUPPORTED_FORMATS = ["png", "jpg", "jpeg", "gif"];

  const selectProfile = (e) => {
    const file = e.target.files[0];
    const format = file.name.split(".")[1];
    if (!SUPPORTED_FORMATS.includes(format.toLowerCase())) {
      swal.fire({
        title: "Failed",
        html: "please select a valid format",
        icon: "error",
      });
      e.target.value = null;
      setState(null);
      return;
    }
    setState(file);
  };
  return (
    <div className="select-profile">
      <img src={getUserProfile()} alt="user profile" />
      <br />
      <input type="file" onChange={selectProfile} name="profile" />
    </div>
  );
};

export default SelectProfile;
