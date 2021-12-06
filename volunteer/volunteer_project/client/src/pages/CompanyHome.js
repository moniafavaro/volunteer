import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

function CompanyHome() {
  return (
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
              <Card.Text>information about applications</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CompanyHome;
