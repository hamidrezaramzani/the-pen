import penLogo from '../../images/pen.png'
function Logo() {
    return <div className="logo">
        <img src={penLogo} alt="pen logo" />
        <h1><span>the</span> pen</h1>
    </div>;
}
export default Logo;