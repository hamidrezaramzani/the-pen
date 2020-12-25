const { Spinner } = require("react-bootstrap");

const Loading = () => {
    return <div className="loading-box">
        <Spinner animation="border" variantP="primary"  />
    </div>;
};

export default Loading;