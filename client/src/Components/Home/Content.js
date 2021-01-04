import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import PostItem from "./PostItem";
import { useQuery } from "react-query";
import { posts } from "../requests";
import HomePostLoading from "./HomePostsLoading";
const Content = () => {
  const { data, isLoading } = useQuery("last-posts", posts);
  if (isLoading) {
    return <HomePostLoading />;
  }
  return (
    <Col xs="12" md="12">
      <Row>
        {data.data.map((item, index) => (
          <PostItem key={index} {...item} />
        ))}
      </Row>
    </Col>
  );
};

export default Content;
