import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";
import logo from "../images/logo-01.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "../helpers/api";
import { setToken, setUserId, setUsername } from "../helpers/auth";

const Register = ({ setIsLoggedIn }) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [errorInfo, setErrorInfo] = useState({});
  const [isError, setIsError] = useState(false);
  const [radioType, setRadioType] = useState("volunteer");
  const navigate = useNavigate();

  const handleRadioChange = (e) => {
    setRadioType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("data ->", data);
    register(data).then(handleSuccessfulRegister).catch(handleError);
  };

  const handleSuccessfulRegister = () => {
    const loginData = {
      username: data.username,
      password: data.password,
    };
    login(loginData).then(handleSuccessfulLogin).catch(handleLoginError);
  };

  const handleError = (error) => {
    if (error.response) {
      setIsError(true);
    }
  };

  const handleSuccessfulLogin = async (e) => {
    setToken(e.token);
    setUsername(e.username);
    setUserId(e.userId);
    setIsLoggedIn(true);
    setIsError(false);

    if (radioType === "company") {
      navigate("/companyprofile");
    } else {
      navigate("/volunteerhome");
    }
  };

  const handleLoginError = (error) => {
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

  const formInputProps = { data, onChange: handleFormChange };

  return (
    <Container
      className="justify-content-center mt-5"
      style={{ display: "flex" }}
    >
      <Row className="my-auto" style={{ width: "60%" }}>
        <Col className="mb-5">
          <Card className="my-5 text-center" id="register-card">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "200px", height: "70px" }}
                ></img>
                <Form.Group as={Row} className="mt-4 justify-content-center">
                  <Col xs="auto">
                    <div key="inline-radio">
                      <Form.Check
                        inline
                        required
                        label="Company"
                        value="company"
                        name="radio"
                        type="radio"
                        checked={radioType === "company"}
                        onChange={handleRadioChange}
                      />
                      <Form.Check
                        inline
                        required
                        label="Volunteer"
                        value="volunteer"
                        name="radio"
                        type="radio"
                        checked={radioType === "volunteer"}
                        onChange={handleRadioChange}
                      />
                    </div>
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3 mt-3" controlId="formGroupUsername">
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    {...formInputProps}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
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
                  <Form.Text
                    className="text-muted"
                    style={{ fontSize: "10px" }}
                  >
                    Your password must contain at least 8 characters between
                    numbers and letters!
                  </Form.Text>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formGroupPasswordConfirmation"
                >
                  <Form.Control
                    type="password"
                    placeholder="Password Confirmation"
                    name="password_confirmation"
                    {...formInputProps}
                  />
                </Form.Group>
                {isError ? (
                  <Container className="justify-content-center">
                    <p>Error.Please try again.</p>
                  </Container>
                ) : (
                  <></>
                )}
                <Form.Group as={Row} className="justify-content-center">
                  <Col xs="auto">
                    <Button
                      type="submit"
                      value="Submit"
                      variant="outline-success"
                    >
                      Register
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
