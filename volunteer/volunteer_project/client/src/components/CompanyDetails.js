import React from "react";
import { Card, Col, Form, Row, Button, Container } from "react-bootstrap";

function CompanyDetails() {
  return (
    <Container className="my-5" style={{ width: "30%" }}>
      <Card>
        <Card.Body>
          <Card.Title>Company Details</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Line 1" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Line 2" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Postcode</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              {/* rever 'value' */}
              <Form.Control type="string" value="number" />
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

export default CompanyDetails;
