const HandleFormError = ({ errors, name }) => {
  const error = errors[name];
  if (error) return <span className="invalid-input">{error.message}</span>;

  return "";
};

export default HandleFormError;
