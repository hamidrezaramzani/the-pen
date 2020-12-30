const { Spinner } = require("react-bootstrap");
const FormLoading = ({ isLoading }) =>
  isLoading ? <>&nbsp;<Spinner size="sm" animation="grow" /></> : null;
  export default FormLoading;
