import { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import NavbarMenu from "./Navbar";
import { UsersContext } from "../../Context/UsersProvider";
import SearchBox from "./SearchBox";
import UserOption from "./UserOption";

const FixedNavbar = () => {
  const user = useContext(UsersContext);
  const [state, setState] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  const onScroll = () => {
    console.log(onScroll);
    if (window.scrollY > 50) {
      setState(true);
    } else {
      setState(false);
    }
  };

  return (
    <Row justify-content-center className={"header"}>
      <Col md="12" xs="12">
        <Row className={state ? "header-fixed" : ""}>
          <NavbarMenu />
          {user.state && user.state.auth ? (
            <>
              <SearchBox md={3} />
              <UserOption />
            </>
          ) : (
            <SearchBox md={4} />
          )}
        </Row>
      </Col>
    </Row>
  );
};

export default FixedNavbar;
