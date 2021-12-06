import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";
import logo from "../other/logo-01.png";
import React from "react";

function Login() {
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
                finibus lectus neque quis nunc.
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
                  className="mt-3"
                ></img>
                <Form.Group className="mb-3 mt-5" controlId="formGroupUsername">
                  <Form.Control type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form>
              <Form.Group as={Row} className="justify-content-center">
                <Col xs="auto">
                  <Button
                    type="submit"
                    value="Submit"
                    variant="outline-success"
                  >
                    Login
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

export default Login;
