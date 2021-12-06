import React from "react";
import { Card, Container } from "react-bootstrap";

function CompanyProfile() {
  return (
    <Container
      className="justify-content-center my-5"
      style={{ display: "flex" }}
    >
      <Card className="text-center" style={{ width: "50%" }}>
        <Card.Body>
          <Card.Title>Company Name</Card.Title>
          <Card.Text>Company About</Card.Text>
          <Card.Text>Company Address</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CompanyProfile;
