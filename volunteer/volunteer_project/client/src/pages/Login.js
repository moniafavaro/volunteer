import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";
import logo from "../images/logo-01.png";
import React, { useState } from "react";
import { login } from "../helpers/api";
import { setToken } from "../helpers/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [errorInfo, setErrorInfo] = useState({});
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    login(data).then(handleSuccessfulLogin).catch(handleError);
  };

  const handleSuccessfulLogin = (data) => {
    setToken(data);
    setIsLoggedIn(true);
    setIsError(false);
    navigate("/volunteerhome");
  };

  const handleError = (error) => {
    if (error.response) {
      setIsError(true);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const formInputProps = { data, errorInfo, handleFormChange };

  return (
    <Container className="justify-content-center" style={{ display: "flex" }}>
      <Row className="my-auto" style={{ width: "70%" }}>
        <Col>
          <Card className="mb-3">
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                rhoncus, orci non faucibus eleifend, lorem sem fermentum quam,
                sit amet porta lorem nunc vitae nibh. Proin sed bibendum elit.
                Nam sed lectus libero. Praesent hendrerit ipsum id sem
                efficitur, vitae suscipit lectus lobortis.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "200px", height: "70px" }}
                  className="mt-3"
                ></img>
                <Form.Group className="mb-3 mt-5" controlId="formGroupUsername">
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    {...formInputProps}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    {...formInputProps}
                  />
                </Form.Group>
                <Button type="submit" value="Login" variant="outline-success">
                  Login
                </Button>
                <Link
                  to="/register"
                  className="justify-content-center"
                  style={{ textDecoration: "none" }}
                >
                  Click here to register
                </Link>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

//   {isError ? (
//   <div className="error">
//     <p>Error. PLease try again</p>
//   </div>
// ) : (
//   <></>
