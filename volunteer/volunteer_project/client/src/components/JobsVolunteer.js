import React from "react";
import { Card, Container } from "react-bootstrap";

const jobs = ({ job_position, hours_per_day, address, description }) => {
  function displayJob() {
    setJobToDisplay({
      job_position: job_position,
      hours_per_day: hours_per_day,
      address: address,
      description: description,
    });
  }

  return (
    <>
      <Container>
        <Card onClick={displayJob}>
          <Card.Header>{job_position}</Card.Header>
          <Card.Text>{hours_per_day}</Card.Text>
        </Card>
      </Container>
    </>
  );
};

export default jobs;
