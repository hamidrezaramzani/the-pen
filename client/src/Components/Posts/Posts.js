import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PostItem from "./PostItem";
import { useQuery } from "react-query";
import PostSekeltonLoading from "./PostSkeletonLoading";
import { posts } from "../requests";
const Posts = () => {
  const { isLoading, data, isFetched } = useQuery("posts", posts);
  const renderSkeletonLoadings = () => {
    return (
      <>
        <PostSekeltonLoading />
        <br />
        <PostSekeltonLoading />
        <br />

        <PostSekeltonLoading />
        <br />
        <PostSekeltonLoading />
      </>
    );
  };

  const renderPostItems = () => {
    // console.log(data);
    if (isFetched) {
      if (data.data.length) {
        return data.data.map((item, index) => (
          <PostItem key={index} {...item} />
        ));
      } else {
        return (
          <>
            <br />
            <p className="d-block text-center text-danger moon">
              You have not added any posts yet
            </p>
          </>
        );
      }
    }
  };
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs="12" md="12" className="posts-list">
          <h2>
            Your Writings
            <Link
              to="/new-post"
              className="btn btn-sm moon float-right btn-warning"
            >
              New Post
            </Link>
          </h2>
          <br />
          <ul>{isLoading ? renderSkeletonLoadings() : renderPostItems()}</ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Posts;
