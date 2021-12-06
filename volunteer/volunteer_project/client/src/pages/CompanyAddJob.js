import React from "react";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";

function CompanyAddJob() {
  return (
    <Container className="my-5" style={{ width: "40%" }}>
      <Card>
        <Card.Body>
          <Card.Title>Company Details</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Job Position</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Hours Per Day</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Postcode</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" />
            </Form.Group>
            <Form.Group as={Row} className="justify-content-center">
              <Col xs="auto">
                <Button type="submit" value="Submit" variant="outline-success">
                  Submit
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CompanyAddJob;
