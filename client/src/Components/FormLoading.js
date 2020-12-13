const { Spinner } = require("react-bootstrap");
const FormLoading = ({ isLoading }) =>
  isLoading ? <Spinner size="sm" animation="grow" /> : null;
  export default FormLoading;
