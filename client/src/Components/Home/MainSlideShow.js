import { Col } from "react-bootstrap";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import SlideItem from "./SlideItem";
const MainSlideShow = () => {
    return <Col xs="12" md="6">
        <div cla1ssName="slide-container">
            <Slide>
                <SlideItem />                
                <SlideItem />                
                <SlideItem />                
            </Slide>
        </div>
    </Col>
};


export default MainSlideShow;