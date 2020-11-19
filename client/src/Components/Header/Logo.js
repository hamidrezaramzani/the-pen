import Col from 'react-bootstrap/Col';
import penLogo from '../../images/pen.png'
function Logo() {
    return <Col md="3" xs="12" className="logo">
        <img src={penLogo} alt="pen logo" /><h1><span>the</span> pen</h1>
    </Col>
}
export default Logo;