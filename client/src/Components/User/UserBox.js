import { Col, Container, Row } from "react-bootstrap";

const UserBox = (props) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs="12" md="4" className="user-box">
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};

export default UserBox;
