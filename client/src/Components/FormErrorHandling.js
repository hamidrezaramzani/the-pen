const FormErrorHandling = (props) => {
    let error = props.errors[props.name];
    if (error)
        return <span className="error-msg">{error.message}</span>;

    return "";
};

export default FormErrorHandling;