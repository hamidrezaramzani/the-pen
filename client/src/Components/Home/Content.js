import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import PostItem from './PostItem';
const Content = () => {
    return <Col xs="12" md="12">
        <Row>
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
        </Row>
    </Col>;
};

export default Content;