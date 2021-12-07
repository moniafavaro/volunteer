import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";
import logo from "../images/logo-01.png";
import React from "react";

function Register() {
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
                efficitur, vitae suscipit lectus lobortis. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Pellentesque tempor leo sed convallis commodo. Maecenas
                suscipit, nisi ut iaculis mollis, leo lacus rhoncus eros, a
                finibus lectus neque quis nunc. Sed nec sapien diam. Etiam purus
                magna, volutpat quis augue sit amet, faucibus posuere orci.
                Quisque quis imperdiet odio, ut sodales eros. Fusce a pulvinar
                massa. Curabitur condimentum vestibulum elit non mattis.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Form>
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "200px", height: "70px" }}
                ></img>
                <Form.Group as={Row} className="my-4 justify-content-center">
                  <Col xs="auto">
                    <div key="inline-radio" className="mb-3">
                      <Form.Check
                        inline
                        label="Company"
                        value="company"
                        name="group1"
                        type="radio"
                      />
                      <Form.Check
                        inline
                        label="Volunteer"
                        value="volunteer"
                        name="group1"
                        type="radio"
                      />
                    </div>
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3 mt-3" controlId="formGroupUsername">
                  <Form.Control type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formGroupPasswordConfirmation"
                >
                  <Form.Control
                    type="password"
                    placeholder="Password Confirmation"
                  />
                </Form.Group>
              </Form>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
