import { Container, Row } from "react-bootstrap";
import MainNavbar from "./MainNavbar";
import MainSlideShow from "./MainSlideShow";
import PostList from "./PostList";
const Home = () => {
    return <>
        <Container>
            <Row>
                <MainNavbar />
                <MainSlideShow />
                <PostList />
            </Row>
        </Container>
    </>;
};

export default Home;