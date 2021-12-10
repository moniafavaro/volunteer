import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Container,
  ListGroup,
  Row,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AddJob from "../components/AddJob";
import {
  fetchCompanyByUserId,
  fetchJobsForCompany,
  fetchVolunteersByJobId,
  updateJob,
} from "../helpers/api";
import { getUserId } from "../helpers/auth";

const CompanyHome = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [show, setShow] = useState(false);
  const [volunteers, setVolunteers] = useState(false);
  const [jobId, setJobId] = useState();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const displayVolunteers = async (id) => {
    setJobId(id);
    setVolunteers(await fetchVolunteersByJobId(id));
  };

  useEffect(() => {
    getData();

    async function getData() {
      const userId = getUserId();
      const company = await fetchCompanyByUserId(userId);
      setJobs(await fetchJobsForCompany(company[0].id));
    }
  }, []);

  const handleCloseJob = (e) => {
    e.preventDefault();
    const job = { closed: true };
    updateJob(jobId, job);
    navigate("/companyhome");
  };

  return (
    <>
      <Container
        className="justify-content-center my-5"
        style={{ display: "flex" }}
      >
        <Row className="my-auto" style={{ width: "70%" }}>
          <Col>
            <Card className="border-0" id="container-home">
              <ListGroup>
                {jobs.map((job) => (
                  <ListGroup.Item
                    className="mb-2"
                    key={job.id}
                    onClick={() => displayVolunteers(job.id)}
                  >
                    {job.job_position}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <Card.Body>
                {volunteers && (
                  <>
                    <ListGroup>
                      {volunteers.map((volunteer) => (
                        <ListGroup.Item className="mb-3" key={volunteer.id}>
                          {volunteer.name}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                    <Button
                      type="submit"
                      value="Submit"
                      variant="outline-danger"
                      onClick={handleCloseJob}
                      style={{ height: "12%" }}
                    >
                      Close Job
                    </Button>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Form.Group as={Row} className="justify-content-center">
        <Col xs="auto">
          <Button
            onClick={handleShow}
            type="submit"
            value="Submit"
            variant="outline-success"
          >
            Add Job
          </Button>
        </Col>
      </Form.Group>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Voluntary Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddJob />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CompanyHome;
