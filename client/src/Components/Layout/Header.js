import { useContext } from "react";
import { Row, Container } from "react-bootstrap";
import { FaAngleDoubleDown } from "react-icons/fa";
import { withRouter } from "react-router";
import { UsersContext } from "../../Context/UsersProvider";
import NavbarMenu from "../Header/Navbar";
import SearchBox from "../Header/SearchBox";
import UserOption from "../Header/UserOption";
import Welcome from "../Header/Welcome";
import MainNavbar from "../Home/MainNavbar";
function Header() {
  const user = useContext(UsersContext);
  return (
    <>
      <Container fluid>
        <Row justify-content-center className="header">
          <NavbarMenu />
          {user.state && user.state.auth ? (
            <>
              <SearchBox md={3} />
              <UserOption />
            </>
          ) : (
            <SearchBox md={4} />
          )}

          <Welcome />
          <div className="go-to-content">
            <FaAngleDoubleDown />
          </div>
        </Row>
      </Container>
      <Container>
        <Row>
          <MainNavbar />
        </Row>
      </Container>
    </>
  );
}

export default withRouter(Header);
