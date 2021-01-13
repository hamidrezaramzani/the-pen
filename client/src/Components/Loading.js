const { Spinner } = require("react-bootstrap");

const Loading = () => {
    return <div className="loading-box">
        <Spinner animation="border" variant="primary"  />
    </div>;
};

export default Loading;