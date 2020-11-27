import Col from 'react-bootstrap/Col';
import PostItem from './PostItem';
const Content = () => {
    return <Col xs="12" md="9">
               <PostItem />
               <PostItem />
               <PostItem />
               <PostItem />
               <PostItem />
          </Col>;
};

export default Content;