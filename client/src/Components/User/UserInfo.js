import { Row, Col, Container } from "react-bootstrap";
import image from "../../images/profile.png";
import { useQuery } from "react-query";
import { useHistory, useParams } from "react-router";
import { userPosts, getUser } from "../requests";
import swal from "../swal";
import PostItem from "../Home/PostItem";
import HomePostLoading from "../Home/HomePostsLoading";
const UserInfo = () => {
  const { id } = useParams();
  const { data, isLoading, isError, isFetched } = useQuery(
    ["user-info", id],
    () => userPosts(id)
  );

  const { data: user } = useQuery(["profile", id], () => getUser(id));

  const history = useHistory();
  if (isError) {
    swal.fire({
      title: "Error",
      html: "We can not get user profile",
      icon: "error",
      onClose: () => {
        history.push("/");
      },
    });
  }

  const renderSkeletonLoadings = () => {
    return (
      <>
        <HomePostLoading />
      </>
    );
  };

  const renderPostItems = () => {
    if (isFetched) {
      if (data && data.data.length) {
        return data.data.map((item, index) => (
          <PostItem key={index} {...item} />
        ));
      } else {
        return (
          <>
            <br />
            <p className="d-block text-center text-danger moon">
              User have not added any posts yet
            </p>
          </>
        );
      }
    }
  };

  return (
    <>
      <Row>
        <Col xs="12" md="12" className="user-info-profile">
          <div className="d-block float-left mr-3">
            <img
              src={
                user && user.data.profile
                  ? `http://localhost:8000/public/profiles/${user.data.profile}`
                  : image
              }
              alt="user profile"
            />
          </div>
          <div className="d-block float-left">
            <h2>{user && user.data.fullname}</h2>
            <p>{user && user.data.bio}</p>
          </div>
        </Col>
      </Row>
      <Container className="my-5">
        <Row className="justify-content-center">
          {isLoading ? renderSkeletonLoadings() : renderPostItems()}
        </Row>
      </Container>
    </>
  );
};

export default UserInfo;
