import { Row, Container } from "react-bootstrap";
import { FaAngleDoubleDown } from "react-icons/fa";
import { withRouter } from "react-router";
import NavbarMenu from "../Header/Navbar";
import SearchBox from "../Header/SearchBox";
import UserOption from "../Header/UserOption";
import Welcome from "../Header/Welcome";
function Header() {
    return <Container fluid>
        <Row justify-content-center className="header">
            <NavbarMenu />
            <SearchBox />
            <UserOption />
            <Welcome />
            <div className="go-to-content">
                <FaAngleDoubleDown  />
            </div>
        </Row>
    </Container>;
}

export default withRouter(Header);