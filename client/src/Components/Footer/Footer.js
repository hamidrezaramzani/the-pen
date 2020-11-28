import Link from 'react-router-dom/Link';
import { FaGooglePlus, FaInstagram, FaTwitter, FaTelegram } from 'react-icons/fa';
import { Col } from "react-bootstrap";
const Footer = () => {
    return <footer className="row footer">
        <Col xs="12" md="3">
            <h3>Social Media</h3>
            <p>that is a way for comminication with us
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas dignissimos porro
                </p>
            <a href="/my-instagram" className="text-danger"><FaInstagram /></a>
            <a href="/my-telegram" className="text-primary"><FaTelegram /></a>
            <a href="/my-twitter" className="text-info"><FaTwitter /></a>
            <a href="/my-google-plus" className="text-danger"><FaGooglePlus /></a>
        </Col>
        <Col xs="12" md="3">
            <h3>Useful Links</h3>
            <ul>
                <li><Link to="/">Posts</Link></li>
                <li><Link to="/">About us</Link></li>
                <li><Link to="/">Contact me</Link></li>
                <li><Link to="/">Terms and condiations</Link></li>
            </ul>
        </Col>
        <Col xs="12" md="3">
            <h3>Categoties</h3>
            <ul>
                <li><Link to="/">Instagram</Link></li>
                <li><Link to="/">Programming</Link></li>
                <li><Link to="/">AI</Link></li>
                <li><Link to="/">Terms and condiations</Link></li>
            </ul>
        </Col>
        <Col xs="12" md="3">
            <h3>Subscribe</h3>
            <p>
                You can get the latest news by registering your email. submit it :)
            </p>
            <div className="subscribe">
            <form action="">
                <input type="text" name="email" placeholder="what is your email?" />
                <button>submit</button>
            </form>
            </div>
        </Col>

    </footer>;
};

export default Footer;