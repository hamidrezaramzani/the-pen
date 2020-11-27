import Link from 'react-router-dom/Link';
import { FaEye, FaHeart, FaTelegramPlane } from 'react-icons/fa';
const SideContentItemSingle = () => {
    return <li>
        <Link to="/">
            <h6><FaTelegramPlane /> Fake Post Title</h6>
            <span className='text-danger'>
                <FaHeart />
            20
        </span>
            <span className='text-primary'>
                <FaEye />
            15400
        </span>
            <p>5 day ago</p>

        </Link>
    </li>;
};

export default SideContentItemSingle;