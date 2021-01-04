import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../Header/Logo";
import Col from "react-bootstrap/Col";
import Link from "react-router-dom/Link";
const NavbarMenu = () => {
  return (
    <Col xs="12" md="8">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-navbar" className="text-warning" />
        <Navbar.Collapse id="menu-navbar">
          <Nav className="mr-auto navbar-menu">
            <Nav.Link href="/">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="/">Contact me</Nav.Link>
            <Nav.Link href="/">About Us</Nav.Link>
            <Nav.Link href="/">Last Notes</Nav.Link>
            <Nav.Link href="/">Best Notes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  );
};
export default NavbarMenu;
