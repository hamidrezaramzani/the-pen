import WelcomeUsersLinks from "./WelcomeUsersLinks";
import { useContext } from "react";
import { UsersContext } from "../../Context/UsersProvider";
import WelcomePanelLinks from "./WelcomePanelLinks";
const Welcome = () => {
  const user = useContext(UsersContext);
  return (
    <div className="welcome">
      <h2>
        Welcome To
        <br />
        <span>
          <span>THE</span> PEN
        </span>
      </h2>
      <br />
      <p>
        You can publish your writings among thousands of people by registering
        on the pen site.
      </p>
      <br />
      {user.state && user.state.auth ? <WelcomePanelLinks /> : <WelcomeUsersLinks />}
    </div>
  );
};

export default Welcome;
