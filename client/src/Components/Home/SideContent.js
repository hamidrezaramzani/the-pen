import Col from 'react-bootstrap/Col';
import SideContentItem from './SideContentItem';
const SideContent = () => {
    return <Col xs="12" md="3">
               <SideContentItem title="Best Posts" />
               <SideContentItem title="Your Friend Posts" />
          </Col>;
};

export default SideContent;