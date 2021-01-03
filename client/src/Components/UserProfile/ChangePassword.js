import SubmitButton from "../SubmitButton";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import FormError from "../FormErrorHandling";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import { changePassword } from "../requests";
import { useContext } from "react";
import { UsersContext } from "../../Context/UsersProvider";
import swal from "../swal";
import { useHistory } from "react-router-dom";
const ChangePassword = () => {
  const history = useHistory();
  const { state } = useContext(UsersContext);
  const schema = Yup.object().shape({
    password: Yup.string()
      .required("can not be empty")
      .min(6, "there must be at least 6 characters")
      .max(30, "there must be a maximum of 6 characters"),
    confirmPassword: Yup.string()
      .required("can not be empty")
      .min(6, "there must be at least 6 characters")
      .max(30, "there must be a maximum of 6 characters"),
    reConfirmPassword: Yup.string()
      .required("can not be empty")
      .oneOf([Yup.ref("confirmPassword"), null], "Passwords must match"),
  });
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const [mutate, { isLoading }] = useMutation(changePassword, {
    onSuccess: () => {
      swal.fire({
        title: "Success",
        html: "Your Password Changed",
        icon: "success",
        onClose: () => {
          history.push("/");
        },
      });
    },
    onError: (err) => {
      if (err.response.status == 400) {
        swal.fire({
          title: "error",
          html: "Current Password in not true",
          icon: "error",
        });
      } else {
        swal.fire({
          title: "error",
          html: "Server Internal Error",
          icon: "error",
        });
      }
    },
  });
  const onSubmit = async ({ password, confirmPassword }) => {
    await mutate({ password, confirmPassword, id: state.user._id });
  };
  return (
    <form className="profile-form my-5" onSubmit={handleSubmit(onSubmit)}>
      <label>Password:</label>
      <input
        type="password"
        ref={register}
        name="password"
        placeholder="Password:"
      />

      <FormError errors={errors} name="password" />
      <br />
      <br />
      <label>Confirm Password:</label>
      <input
        type="password"
        name="confirmPassword"
        ref={register}
        placeholder="Confirm Password:"
      />
      <br />

      <FormError errors={errors} name="confirmPassword" />

      <br />
      <label>ReConfirm Password:</label>
      <input
        type="password"
        name="reConfirmPassword"
        ref={register}
        placeholder="Re Confirm Password:"
      />
      <br />

      <FormError errors={errors} name="reConfirmPassword" />

      <br />
      <SubmitButton
        isLoading={isLoading}
        className="btn btn-sm btn-block moon btn-primary my-2"
        type="submit"
      >
        Change Password
      </SubmitButton>
    </form>
  );
};

export default ChangePassword;
