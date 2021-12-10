import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  getUsername,
  removeToken,
  removeUserId,
  removeUsername,
} from "../helpers/auth";
import logo from "../images/logo-02.png";
import "../styles/main.scss";

const NavBar = ({ isLoggedIn, setIsLoggedIn, userType, setUserType }) => {
  const navigate = useNavigate();
  const username = getUsername();

  const loggingOut = () => {
    removeToken();
    removeUserId();
    removeUsername();
    setIsLoggedIn(false);
    setUserType("");
    navigate("/login");
  };

  // function handleSubmit(e) {
  //   e.preventDefault();
  // }

  return (
    <>
      {isLoggedIn ? (
        userType === "company" ? (
          <Navbar expand="lg" bg="custom-nav" variant="light">
            <Container className="justify-content-center">
              <Navbar.Brand className="mx-auto pl-4">
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "200px", height: "70px" }}
                ></img>
              </Navbar.Brand>
              <Navbar className="mx-auto pr-4">
                <Nav className="justify-content-end">
                  <Nav.Link href="/companyhome">Home</Nav.Link>
                  <Nav.Link href="/companyprofile">{username}</Nav.Link>
                  <Nav.Link href="/login" onClick={loggingOut}>
                    Logout
                  </Nav.Link>
                </Nav>
              </Navbar>
            </Container>
          </Navbar>
        ) : (
          <Navbar expand="lg" bg="custom-nav" variant="light">
            <Container className="justify-content-center">
              <Navbar.Brand className="mx-auto pl-4">
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "200px", height: "70px" }}
                ></img>
              </Navbar.Brand>
              <Navbar className="mx-auto pr-4">
                <Nav className="justify-content-end">
                  <Nav.Link href="/volunteerhome">Home</Nav.Link>
                  <Nav.Link href="/volunteerprofile">{username}</Nav.Link>
                  <Nav.Link href="/login" onClick={loggingOut}>
                    Logout
                  </Nav.Link>
                </Nav>
              </Navbar>
            </Container>
          </Navbar>
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default NavBar;
