import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from "../Header/Logo";
import Col from 'react-bootstrap/Col';
const NavbarMenu = () => {
    return <Col xs="12" md="10"><Navbar expand="lg">
        <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-navbar" className="text-warning" />
        <Navbar.Collapse id="menu-navbar">
            <Nav className="mr-auto navbar-menu" >
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Contact me</Nav.Link>
                <Nav.Link href="#link">About Us</Nav.Link>
                <Nav.Link href="#link">Last Notes</Nav.Link>
                <Nav.Link href="#link">Best Notes</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar></Col>;
};
export default NavbarMenu;