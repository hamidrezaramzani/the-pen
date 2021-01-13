import FormErrorHandler from "../FormErrorHandling";
const NewPostInput = ({ register, errors, name, className, placeholder }) => {
  return (
    <>
      <input
        type="text"
        name={name}
        className={className}
        placeholder={placeholder}
        ref={register}
      />
      <FormErrorHandler errors={errors} name={name} />
    </>
  );
};

export default NewPostInput;
