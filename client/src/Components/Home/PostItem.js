import image from '../../images/background-2.jpg';
import user from '../../images/profile.png';
const PostItem = () => {
    return <div className="post-item">
        <img src={image} alt="post item" />
        <div className="post-item-content">
            <h2>This is A Fake Post Title</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident earum optio voluptatibus modi. Ea dolorem,</p>
            <div className="post-item-user">
                <div>
                    <img src={user} alt="post item user" />
                </div>
                <h4>Hamidreza Ramzani</h4>
                <span>4 days ago</span>
            </div>
        </div>
    </div>;
};

export default PostItem;