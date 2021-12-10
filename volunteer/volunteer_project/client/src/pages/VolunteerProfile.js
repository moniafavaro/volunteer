import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import VolunteerDetails from "../components/VolunteerDetails";
import { fetchVolunteerByUserId } from "../helpers/api";
import { getUserId } from "../helpers/auth";

const VolunteerProfile = () => {
  const [volunteer, setVolunteer] = useState({
    name: "",
    address: "",
    phone_number: 0,
    curriculum_vitae: "",
    jobs: [],
    user_id: 0,
  });

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    getData();

    async function getData() {
      const tempVolunteer = await fetchVolunteerByUserId(getUserId());
      setVolunteer(tempVolunteer[0]);
    }
  }, []);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setVolunteer({
      ...volunteer,
      [name]: value,
    });
  };

  const formInputProps = { volunteer, onChange: onInputChange };

  return (
    <>
      <Container
        className="justify-content-center my-5"
        style={{ display: "flex" }}
      >
        <Card
          className="text-center"
          style={{ width: "50%" }}
          id="volunteer-profile"
        >
          <Card.Body>
            <Card.Title>{volunteer.name}</Card.Title>
            <Card.Text>{volunteer.phone_number}</Card.Text>
            <Card.Text>{volunteer.address}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Container>
        <Form.Group as={Row} className="justify-content-center">
          <Col xs="auto">
            <Button
              onClick={handleShow}
              type="submit"
              value="Submit"
              variant="outline-success"
            >
              Edit Details
            </Button>
          </Col>
        </Form.Group>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <VolunteerDetails />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default VolunteerProfile;
