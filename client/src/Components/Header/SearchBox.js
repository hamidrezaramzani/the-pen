import Col from 'react-bootstrap/Col';
import { FaSearch } from 'react-icons/fa';
const SearchBox = () => {
    return <Col xs="12" md="5">
        <form>
            <div className="search-input-box">
                <FaSearch />
                <input type="text" name="search" placeholder="search..." className="search-input" />
            </div>
        </form>
    </Col>;
};

export default SearchBox;