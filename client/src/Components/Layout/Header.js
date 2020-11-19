import { Row, Container } from "react-bootstrap";
import NavbarMenu from "../Header/Navbar";
import SearchBox from "../Header/SearchBox";
function Header() {
    return <Container fluid>
        <Row justify-content-center className="header">
            <NavbarMenu />
            <SearchBox  />
        </Row>
    </Container>;
}

export default Header;