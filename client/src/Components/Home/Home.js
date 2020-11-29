import { Container, Row } from "react-bootstrap";
import HomeContent from "./HomeContent";
import MainNavbar from "./MainNavbar";
import MainSlideShow from "./MainSlideShow";
import PostList from "./PostList";
import Welcome from "./Welcome";
const Home = () => {
    return <>
        <Container fluid>
            <Row>
                <MainNavbar />
                <MainSlideShow />
                <PostList />
                <Welcome />            
                <HomeContent />
            </Row>
        </Container>
    </>;
};

export default Home;