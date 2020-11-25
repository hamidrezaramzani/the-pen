import Col from 'react-bootstrap/Col';
import PostItem from './PostItem';
const PostList = () => {
    return <Col xs="12" md="4" className="post-list p-0">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
    </Col>;
}; 

export default PostList;