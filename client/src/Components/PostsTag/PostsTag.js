import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { postsTag } from "../requests";
import HomePostLoading from "../Home/HomePostsLoading";
import PostItem from "../Home/PostItem";
import { Row , Container} from "react-bootstrap";
const PostsTag = () => {
  const { tag } = useParams();
  const { data, isLoading } = useQuery(["posts-tag", tag], () => postsTag(tag));
  console.log(data);
  if (isLoading) {
    return <HomePostLoading />;
  }

  return (
    <Container>
      <Row>
        {data.data.map((item, index) => (
          <PostItem {...item} key={index} />
        ))}
      </Row>
    </Container>
  );
};

export default PostsTag;
