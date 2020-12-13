import Col from 'react-bootstrap/Col';
import { FaSearch } from 'react-icons/fa';
const SearchBox = (props) => {
    return <Col xs="12" md={props.md}>
        <div className="search-input-box">
            <button className="btn btn-block text-info">
                <FaSearch />
                SEARCH
            </button>
        </div>
    </Col>;
};

export default SearchBox;