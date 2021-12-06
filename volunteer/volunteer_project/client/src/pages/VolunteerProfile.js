import React from "react";
import { Card, Container } from "react-bootstrap";

function VolunteerProfile() {
  return (
    <Container
      className="justify-content-center my-5"
      style={{ display: "flex" }}
    >
      <Card className="text-center" style={{ width: "50%" }}>
        <Card.Body>
          <Card.Title>Volunteers Done</Card.Title>
          <Card.Text className="mt-3">
            Job Title - link to job details
          </Card.Text>
          <Card.Text>Job Title - link to job details</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default VolunteerProfile;
