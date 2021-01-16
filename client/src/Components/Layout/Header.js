import { useContext } from "react";
import { Row, Container } from "react-bootstrap";
import { FaAngleDoubleDown } from "react-icons/fa";
import { withRouter } from "react-router";
import FixedNavbar from "../Header/FixedNavbar";
import Welcome from "../Header/Welcome";
import MainNavbar from "../Home/MainNavbar";
function Header() {
  return (
    <>
      <Container fluid>
        <FixedNavbar />
        <Row>
          <Welcome />
          <div className="go-to-content">
            <FaAngleDoubleDown />
          </div>
        </Row>
        <br />
        <br />
      </Container>
    </>
  );
}

export default withRouter(Header);
