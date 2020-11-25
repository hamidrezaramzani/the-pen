import { Container, Row } from "react-bootstrap";
import MainNavbar from "./MainNavbar";
import MainSlideShow from "./MainSlideShow";
import PostList from "./PostList";
import Welcome from "./Welcome";
const Home = () => {
    return <>
        <Container>
            <Row>
                <MainNavbar />
                <MainSlideShow />
                <PostList />
                <Welcome />
            </Row>
        </Container>
    </>;
};

export default Home;