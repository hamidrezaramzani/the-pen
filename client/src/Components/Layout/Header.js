import { Row, Col, Container } from "react-bootstrap";
import Logo from "../Header/Logo";
function Header() {
    return <Container fluid><Row justify-content-center className="header">
        <Logo />
    </Row></Container>;
}

export default Header;