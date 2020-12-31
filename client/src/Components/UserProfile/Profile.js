import { Col, Container, Row } from "react-bootstrap";
import SelectProfile from "./SelectProfile";
import { useQuery } from "react-query";
import { getUser } from "../requests";
import { useUserId } from "../hooks";
import ProfileSkeletonLoading from "./ProfileSkeletonLoading";
import ProfileForm from "./ProfileForm";
import ProfileProvider from "../../Context/ProfileProvider";
import ChangePassword from "./ChangePassword";
const Profile = () => {
  const id = useUserId();
  const { data, isLoading } = useQuery(["profile", id], () => getUser(id));

  if (isLoading) {
    return <ProfileSkeletonLoading />;
  }

  return (
    <Container>
      <Row className="justify-content-center my-5 profile">
        <Col xs="12" md="12">
          <ProfileProvider>
            <SelectProfile img={data.data.profile} />
            <ProfileForm fullname={data.data.fullname} bio={data.data.bio} />
          </ProfileProvider>
          <ChangePassword />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
