import { Col } from "react-bootstrap";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import SlideItem from "./SlideItem";
const MainSlideShow = () => {
    return <Col xs="12" md="8">
        <div className="slide-container">
            <Slide>
                <SlideItem />                
                <SlideItem />                
                <SlideItem />                
            </Slide>
        </div>
    </Col>;
};


export default MainSlideShow;