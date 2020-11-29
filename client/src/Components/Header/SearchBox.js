import Col from 'react-bootstrap/Col';
import { FaSearch } from 'react-icons/fa';
const SearchBox = () => {
    return <Col xs="12" md="2">
        <div className="search-input-box">
            <button className="btn btn-block text-info">
                <FaSearch />
                SEARCH
            </button>
        </div>
    </Col>;
};

export default SearchBox;