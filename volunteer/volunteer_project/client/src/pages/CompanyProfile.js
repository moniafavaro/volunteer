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
import {
  addCompany,
  fetchCompanyByUserId,
  updateCompany,
} from "../helpers/api";
import { getUserId } from "../helpers/auth";

const CompanyProfile = () => {
  const [company, setCompany] = useState({
    name: "",
    address: "",
    phone_number: "",
    user_id: 0,
  });

  const [show, setShow] = useState(false);
  const [companyId, setCompanyId] = useState();
  const [isNew, setIsNew] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    getData();

    async function getData() {
      const tempCompany = await fetchCompanyByUserId(getUserId());
      if (tempCompany.length > 0) {
        setCompanyId(tempCompany[0].id);
        setCompany(tempCompany[0]);
        setIsNew(false);
      } else {
        setIsNew(true);
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNew) {
      const userId = getUserId();
      company.user_id = parseInt(userId);
      console.log("test -->", company);
      addCompany(company);
    } else {
      delete company["user_id"];
      updateCompany(companyId, company);
    }
    window.location.reload();
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setCompany({
      ...company,
      [name]: value,
    });
  };

  const formInputProps = { company, onChange: handleFormChange };

  return (
    <>
      <Container
        className="justify-content-center my-5"
        style={{ display: "flex" }}
      >
        <Card
          className="text-center"
          style={{ width: "50%" }}
          id="company-profile"
        >
          <Card.Body>
            <Card.Title>{company.name}</Card.Title>
            <Card.Text>{company.phone_number}</Card.Text>
            <Card.Text>{company.address}</Card.Text>
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
          <Container>
            <Card>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3 mt-2">
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={company.name}
                      {...formInputProps}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 mt-2">
                    <Form.Group className="mb-3 mt-2">
                      <Form.Control
                        as="textarea"
                        placeholder="Address"
                        name="address"
                        value={company.address}
                        {...formInputProps}
                      />
                    </Form.Group>
                    <Form.Control
                      type="number"
                      placeholder="Phone Number"
                      name="phone_number"
                      value={company.phone_number}
                      {...formInputProps}
                    />
                  </Form.Group>
                  <Form.Group as={Row} className="justify-content-center">
                    <Col xs="auto">
                      <Button
                        type="submit"
                        value="Submit"
                        variant="outline-success"
                      >
                        Submit
                      </Button>
                    </Col>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CompanyProfile;
