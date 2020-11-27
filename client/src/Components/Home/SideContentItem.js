import SideContentItemSingle from './SideContentItemSingle';
import propTypes from 'prop-types';
const SideContentItem = (props) => {
    return <div className="side-content-item">
        <h5>{props.title}</h5>
        <ul>
            <SideContentItemSingle />
            <SideContentItemSingle />
            <SideContentItemSingle />
            <SideContentItemSingle />
            <SideContentItemSingle />
        </ul>
    </div>;
};

SideContentItem.propTypes = {
    title: propTypes.string
};


export default SideContentItem;

