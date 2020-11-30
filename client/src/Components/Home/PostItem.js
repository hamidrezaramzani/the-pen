import { FaUser } from 'react-icons/fa';
import image from '../../images/background-2.jpg';
const PostItem = () => {
    return <div className="col-12 col-md-3 col-lg-4 p-2">
        <div className="post-item">
            <div className="post-item-image">
                <img src={image} alt="post item" />
            </div>
            <div className="post-item-content">
                <p>December 15, 2017</p>
                <h2>This is A Fake Post Title</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident earum optio voluptatibus modi. Ea dolorem,</p>
                <div className="post-item-user">                    
                    <h4><FaUser />&nbsp; Hamidreza Ramzani</h4>                    
                </div>
                <div className="post-category">Music</div>
            </div>
        </div>
    </div>;
};

export default PostItem;