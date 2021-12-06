import React from "react";
import {
  Card,
  Col,
  Container,
  ListGroup,
  Row,
  Form,
  Button,
} from "react-bootstrap";
import SearchBar from "./SearchBar";

function VolunteerHome() {
  return (
    <>
      <SearchBar />
      <Container
        className="justify-content-center my-5"
        style={{ display: "flex" }}
      >
        <Row className="my-auto" style={{ width: "70%" }}>
          <Col>
            <Card className="border-0">
              <ListGroup className="mb-2">
                <ListGroup.Item>Job title</ListGroup.Item>
              </ListGroup>
              <ListGroup className="my-2">
                <ListGroup.Item>Job title</ListGroup.Item>
              </ListGroup>
              <ListGroup className="my-2">
                <ListGroup.Item>Job title</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Text>more details about the job</Card.Text>
              </Card.Body>
            </Card>
            <Form.Group as={Row} className="justify-content-end">
              <Col xs="auto">
                <Button type="submit" value="Submit" variant="outline-success">
                  Apply
                </Button>
              </Col>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default VolunteerHome;
