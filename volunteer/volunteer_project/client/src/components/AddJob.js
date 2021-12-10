import React, { useState } from "react";
import { Card, Form, Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addJob, fetchCompanyByUserId } from "../helpers/api";
import { getUserId } from "../helpers/auth";

const AddJob = () => {
  const [data, setData] = useState({
    job_position: "",
    hours_per_day: 0,
    address: "",
    description: "",
    company: 0,
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = getUserId();
    const company = await fetchCompanyByUserId(userId);
    data.company = company[0].id;
    addJob(data);
    navigate("/companyhome");
    window.location.reload();
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const formInputProps = { data, onChange: handleFormChange };

  return (
    <Container>
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 mt-2">
              <Form.Control
                type="text"
                placeholder="Job Position"
                name="job_position"
                {...formInputProps}
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-2">
              <Form.Control
                type="number"
                placeholder="Hours per Day"
                name="hours_per_day"
                {...formInputProps}
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-2">
              <Form.Control
                as="textarea"
                placeholder="Address"
                name="address"
                {...formInputProps}
              />
            </Form.Group>
            <Form.Group className="mb-4 mt-2">
              <Form.Control
                as="textarea"
                placeholder="Description"
                name="description"
                {...formInputProps}
              />
            </Form.Group>
            <Form.Group as={Row} className="justify-content-center">
              <Col xs="auto">
                <Button type="submit" value="Submit" variant="outline-success">
                  Add Job
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddJob;
