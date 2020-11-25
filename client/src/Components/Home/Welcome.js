import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <Col className="welcome-to-site" xs="12" md="12">
      <h2>Welcome To the Pen</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed ex
        non ligula ultricies porta vitae sit amet est. Etiam vel nisl blandit,
        tempor mi id, aliquam massa. Aenean mollis varius augue et rutrum.
        Quisque interdum eros non elit sollicitudin, in placerat elit blandit.
        Nulla ipsum nunc, fermentum eu efficitur et, dictum at elit. Aliquam
        erat volutpat. Maecenas ultrices sollicitudin massa posuere efficitur.
        Etiam tincidunt elit nec risus ultrices, vel tempus nisl vehicula.
        <br />
        <br />
        <Link className="btn btn-sm btn-primary moon" to="/login">Login</Link>        
        <Link className="btn btn-sm btn-warning moon" to="/Register">Register</Link>
      </p>
      
    </Col>
  );
};

export default Welcome;
