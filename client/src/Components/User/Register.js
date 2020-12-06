import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserBox from "./UserBox";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import FormErrorHandling from "../FormErrorHandling";
import { useMutation } from "react-query";
import { checkDuplicateFieldValue } from "../requests";
const Register = () => {
  const [checkDuplicateFieldMutate] = useMutation(checkDuplicateFieldValue);

  const schema = yup.object().shape({
    fullname: yup.string().required("it can not be empty"),
    email: yup.string().required("it can not be empty").email("it's not email").test("checkDuplicateEmail", "already email reserved", async (data) => {
      return await checkDuplicateFieldMutate({ field: "email", value: data });
    }),
    password: yup.string().required("it can not be empty").min(6, "Must be at least 6 characters"),
  });

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (values) => {
    console.log(values);
  };

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
      <form method="post" className="user-form" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="fullname" ref={register} placeholder="Fullname" />
        <FormErrorHandling errors={errors} name="fullname" />



        <input type="text" name="email" ref={register} placeholder="Email" />
        <FormErrorHandling errors={errors} name="email" />

        <input type="password" name="password" ref={register} placeholder="Password" />
        <FormErrorHandling errors={errors} name="password" />

        <br />
        <button type="submit">Register</button>
      </form>
      <br />
      <Link to="/sign-in">do you have account?</Link>
    </UserBox>
  );
};

export default Register;
