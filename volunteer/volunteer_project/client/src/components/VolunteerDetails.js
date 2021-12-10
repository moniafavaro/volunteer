import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Button, Row } from "react-bootstrap";
import { fetchVolunteerByUserId, updateVolunteer } from "../helpers/api";
import { getUserId } from "../helpers/auth";

function VolunteerDetails() {
  const [volunteer, setVolunteer] = useState({
    name: "",
    address: "",
    phone_number: 0,
    curriculum_vitae: "",
    jobs: [],
  });

  const [volunteerId, setVolunteerId] = useState();

  useEffect(() => {
    getData();

    async function getData() {
      const tempVolunteer = await fetchVolunteerByUserId(getUserId());
      setVolunteerId(tempVolunteer[0].id);
      setVolunteer(tempVolunteer[0]);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    delete volunteer["jobs"];
    delete volunteer["id"];
    delete volunteer["user_id"];
    updateVolunteer(volunteerId, volunteer);
    // window.location.reload();
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setVolunteer({
      ...volunteer,
      [name]: value,
    });
  };

  const formInputProps = { volunteer, onChange: onInputChange };

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Volunteer Details</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John Smith"
                name="name"
                value={volunteer.name}
                {...formInputProps}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                className="mb-3"
                as="textarea"
                name="address"
                value={volunteer.address}
                {...formInputProps}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="00000-000000"
                name="phone_number"
                value={volunteer.phone_number}
                {...formInputProps}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload CV</Form.Label>
              <Form.Control
                type="file"
                placeholder="CV"
                name="curriculum_vitae"
                {...formInputProps}
              />
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

export default VolunteerDetails;
