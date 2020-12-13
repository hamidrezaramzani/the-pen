import { FaSignInAlt, FaUser } from 'react-icons/fa';
import Link from 'react-router-dom/Link';
import { queryCache } from "react-query";
import { useEffect } from 'react';

const Welcome = () => {
    console.log(queryCache.getQueryData("user"));
    useEffect(() => {
        
    },[]);
    return <div className="welcome">
        <h2>Welcome To
            <br />
            <span><span>THE</span> PEN</span>
        </h2>
        <br />
        <p>You can publish your writings among thousands of people by registering on the pen site.</p>
        <br />
        <div className="links">
            <Link to="/sign-up" className="text-warning"><FaUser />SIGN UP</Link>
            <Link to="/sign-in" className="text-info"><FaSignInAlt />SIGN IN</Link>
        </div>
    </div>;
};

export default Welcome;