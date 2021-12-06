import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../images/logo-01.png";
import "../styles/main.scss";

const NavBar = () => {
  return (
    <>
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
              <Nav.Link href="/companyprofile">Profile</Nav.Link>
              <Nav.Link href="/login">Login/Logout</Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
