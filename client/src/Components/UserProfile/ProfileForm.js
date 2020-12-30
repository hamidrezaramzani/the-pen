import FormLoading from "../FormLoading";
const ProfileForm = (props) => {
  return (
    <>
      <br />
      <form method="post" className="profile-form">
        <label>Fullname:</label>
        <input
          type="text"
          name="fullname"
          defaultValue={props.fullname}
          placeholder="Fullname:"
        />
        <br />
        <br />
        <label>Bio:</label>
        <textarea name="bio"></textarea>
        <button className="btn btn-sm btn-block moon btn-primary my-2">
          Update Profile
          <FormLoading isLoading={false} />
        </button>
      </form>
    </>
  );
};

export default ProfileForm;
