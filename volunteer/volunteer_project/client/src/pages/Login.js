import { setToken, setUserId, setUsername } from "../helpers/auth";
import { Card, Col, Container, Row, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo-01.png";
import React, { useState } from "react";
import {
  fetchCompanyByUserId,
  fetchVolunteerByUserId,
  login,
} from "../helpers/api";

const Login = ({ setIsLoggedIn, setUserType }) => {
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

  const handleSuccessfulLogin = async (e) => {
    setToken(e.token);
    setUsername(e.username);
    setUserId(e.userId);
    setIsLoggedIn(true);
    setIsError(false);

    const company = await fetchCompanyByUserId(e.userId);

    if (company.length > 0) {
      navigate("/companyprofile");
    } else {
      navigate("/volunteerhome");
    }
  };

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data);
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

  const formInputProps = { data, errorInfo, onChange: handleFormChange };

  return (
    <Container
      className="justify-content-center mt-5"
      style={{ display: "flex" }}
    >
      <Row className="my-auto" style={{ width: "70%" }}>
        <Col className="mb-5">
          <Card className="my-5 text-center" id="login-card">
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
                {isError ? (
                  <Container className="error">
                    <p>Error. Please try again</p>
                  </Container>
                ) : (
                  <></>
                )}
                <Form.Control type="submit" value="Login" />
                <Container className="mt-3 text-center" id="register-link">
                  <Link
                    to="/register"
                    className="justify-content-center"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Click here to register
                  </Link>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
