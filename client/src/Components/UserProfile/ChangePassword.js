import FormLoading from "../FormLoading";

const ChangePassword = () => {
  return (
    <form className="profile-form my-5">
      <label>Password:</label>
      <input type="password" name="password" placeholder="Password:" />

      <br />
      <br />
      <label>Confirm Password:</label>
      <input
        type="text"
        name="confirm_password"
        placeholder="Confirm Password:"
      />
      <br />
      <br />
      <button className="btn btn-sm btn-block moon btn-primary my-2">
        Change Password
        <FormLoading isLoading={false} />
      </button>
    </form>
  );
};

export default ChangePassword;
