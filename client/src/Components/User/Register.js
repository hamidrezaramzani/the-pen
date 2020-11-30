import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserBox from "./UserBox";
const Register = () => {
  return (
    <UserBox>
      <h2>Register</h2>
      <br />
      <Link to="/" className="userbox-links wgoogle">
        <FaGoogle />
        &nbsp;Register With Google
      </Link>
      <Link to="/" className="userbox-links wfacebook">
        <FaFacebook />
        &nbsp;Register With Facebook
      </Link>
      <br />
      <br />
      <h2>Register with an email</h2>
      <br />
      <form method="post" className="user-form">
        <input type="text" name="register" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <br />
        <button type="submit">Register</button>
      </form>
      <br />
      <Link to="/sign-in">do you have account?</Link>
    </UserBox>
  );
};

export default Register;
