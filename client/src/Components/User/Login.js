import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import UserBox from "./UserBox";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormErrorHandling from "../FormErrorHandling";
import { useMutation } from "react-query";
import { login } from "../requests";
import FormLoading from "../FormLoading";
import swal from "../swal";
import { LOGIN, UsersContext } from "../../Context/UsersProvider";
import { useContext } from "react";
const Login = () => {
  const history = useHistory();
  const user = useContext(UsersContext);
  const [loginMutate, { isLoading }] = useMutation(login, {
    onError: (error) => {
      if (error.response.status == 401) {
        swal.fire({
          title: "Authentication Error",
          html: "email or password is invalid",
          icon: "error",
        });
      } else {
        swal.fire({
          title: "error",
          html: "we have an error on server",
          icon: "error",
        });
      }
    },
    onSuccess: ({ data }) => {
      swal
        .fire({
          title: "Done",
          html: "login successfully",
          icon: "success",
        })
        .then(() => {
          user.dispatch({
            type: LOGIN,
            items: data,
          });
          history.push("/");
        });
    },
  });
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("it can not be empty")
      .email("it's not correct email"),
    password: yup
      .string()
      .required("it can not be empty")
      .min(6, "Must be at least 6 characters"),
  });
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values) => {
    await loginMutate(values);
  };
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
      <form
        method="post"
        className="user-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="text" name="email" ref={register} placeholder="Email" />
        <FormErrorHandling name="email" errors={errors} />
        <input
          type="password"
          name="password"
          ref={register}
          placeholder="Password"
        />
        <FormErrorHandling name="password" errors={errors} />
        <Link to="/forget">forget email or password?</Link>
        <br />
        <button type="submit">
          Login &nbsp;
          <FormLoading isLoading={isLoading} />
        </button>
      </form>
      <br />
      <Link to="/sign-up">do you have not account?</Link>
      <br />
    </UserBox>
  );
};

export default Login;
