import { Col } from "react-bootstrap";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SlideItem from "./SlideItem";
import { useQuery } from "react-query";
import { postSlides } from "../requests";
const MainSlideShow = () => {
  const { data } = useQuery("slides", postSlides);
  const renderSlides = () => {
    if (data) {
      return (
        <Slide>
          {data && data.data.map((item, index) => <SlideItem {...item} key={index} />)}
        </Slide>
      );
    }
    return "";
  };
  return (
    <Col xs="12" md="8">
      <div className="slide-container">{renderSlides()}</div>
    </Col>
  );
};

export default MainSlideShow;
