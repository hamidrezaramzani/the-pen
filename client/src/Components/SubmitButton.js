import { Button, Spinner } from "react-bootstrap";

const SubmitButton = ({ isLoading, children, ...props }) => {
  return (
    <Button className="my-2" disabled={isLoading} {...props}>
      {children}
      &nbsp;
      {isLoading ? <Spinner animation="grow" size="sm" /> : null}
    </Button>
  );
};

export default SubmitButton;
