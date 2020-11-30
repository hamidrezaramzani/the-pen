import { Container, Row } from "react-bootstrap";
import Content from "./Content";
import MainNavbar from "./MainNavbar";
import MainSlideShow from "./MainSlideShow";
import PostList from "./PostList";
const Home = () => {
    return <>
        <Container fluid>
            <Row>
                <MainNavbar />
                <MainSlideShow />
                <PostList />
            </Row>
        </Container>
        <Container>
            <Row>
                <Content />
            </Row>
        </Container>
    </>;
};

export default Home;