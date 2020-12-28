import { Col, Container, Row } from "react-bootstrap";
import SelectProfile from "./SelectProfile";

const Profile = () => {
  return (
    <Container>
      <Row className="justify-content-center my-3">
          <Col xs="12" md="12">
              <SelectProfile />
          </Col>
      </Row>
    </Container>
  );
};

export default Profile;
