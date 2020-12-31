import SubmitButton from "../SubmitButton";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../HandleFormError";
import { ProfileContext } from "../../Context/ProfileProvider";
import { useContext } from "react";
import { useMutation, queryCache, queryCaches } from "react-query";
import { getUser, updateProfile } from "../requests";
import { UsersContext } from "../../Context/UsersProvider";
import swal from "../swal";

const ProfileForm = (props) => {
  const { state } = useContext(UsersContext);
  const [mutate, { isLoading }] = useMutation(updateProfile, {
    onSuccess: () => {
      swal.fire({
        title: "Done",
        html: "Profile Updated",
        icon: "success",
        onClose: async () => {
          queryCache.prefetchQuery(["profile", state.user._id], () =>
            getUser(state.user._id)
          );
        },
      });
    },
    onError: () => {
      swal.fire({
        title: "error",
        html: "we have an error on server",
        icon: "error",
      });
    },
  });
  const { state: profile } = useContext(ProfileContext);
  const schema = Yup.object().shape({
    fullname: Yup.string().required("can not be empty"),
    bio: Yup.string(),
  });
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values) => {
    console.log(values);
    const data = new FormData();
    data.append("fullname", values.fullname);
    data.append("bio", values.bio);
    data.append("profile", profile);
    data.append("id", state.user._id);
    await mutate(data);
  };
  return (
    <>
      <br />
      <form
        method="post"
        onSubmit={handleSubmit(onSubmit)}
        className="profile-form"
      >
        <label>Fullname:</label>
        <input
          type="text"
          name="fullname"
          defaultValue={props.fullname}
          placeholder="Fullname:"
          ref={register}
        />
        <FormError errors={errors} name="fullname" />
        <br />
        <br />
        <label>Bio:</label>
        <textarea name="bio" ref={register}>
          {props.bio}
        </textarea>
        <FormError errors={errors} name="bio" />
        <SubmitButton
          isLoading={isLoading}
          type="submit"
          className="btn btn-sm btn-block my-2 moon "
        >
          Update Profile
        </SubmitButton>
      </form>
    </>
  );
};

export default ProfileForm;
