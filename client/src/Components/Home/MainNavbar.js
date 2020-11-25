import { Nav, Navbar } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
const MainNavbar = () => {
    return <Col xs="12" lg="12" className="main-navbar-menu"><Navbar expand="lg">
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
            <Nav className="mr-auto main-navbar" >
                <Nav.Link href="#home">Sport</Nav.Link>
                <Nav.Link href="#link">Programming</Nav.Link>
                <Nav.Link href="#link">Social Media</Nav.Link>
                <Nav.Link href="#link">Food</Nav.Link>
                <Nav.Link href="#link">Book</Nav.Link>
                <Nav.Link href="#link">Hardware</Nav.Link>
                <Nav.Link href="#link">AI</Nav.Link>
                <Nav.Link href="#link">Policies</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar></Col>;
};

export default MainNavbar;