import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserBox from "./UserBox";
const Login = () => {
  return (
    <UserBox>
      <h2>Login</h2>
      <br />
      <Link to="/" className="userbox-links wgoogle">
        <FaGoogle />
        &nbsp;Login With Google
      </Link>
      <Link to="/" className="userbox-links wfacebook">
        <FaFacebook />
        &nbsp;Login With Facebook
      </Link>
      <br />
      <br />
      <h2>Login with an email</h2>
      <br />
      <form method="post" className="user-form">
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <Link to="/forget">forget email or password?</Link>
        <br />
        <button type="submit">Login</button>
      </form>
      <br />
      <Link to="/sign-up">do you have not account?</Link>
      <br />
    </UserBox>
  );
};

export default Login;
