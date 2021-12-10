import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Container,
  ListGroup,
  Row,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import SearchBar from "./SearchBar";
import {
  fetchAllJobs,
  fetchJobById,
  fetchVolunteerByUserId,
  updateVolunteer,
} from "../helpers/api";
import { getUserId } from "../helpers/auth";

const VolunteerHome = () => {
  const [jobs, setJobs] = useState([]);
  const [jobInfo, setJobInfo] = useState(false);
  const [jobId, setJobId] = useState();

  const displayJobInfo = async (id) => {
    setJobId(id);
    setJobInfo(await fetchJobById(id));
  };

  useEffect(() => {
    getData();

    async function getData() {
      setJobs(await fetchAllJobs());
    }
  }, []);

  const handleApplyJob = async (e) => {
    e.preventDefault();

    const userId = getUserId();
    const volunteer = await fetchVolunteerByUserId(userId);
    const newJobs = volunteer[0].jobs;
    newJobs.push(jobId);
    const newVolunteer = { jobs: newJobs };
    updateVolunteer(volunteer[0].id, newVolunteer);
    // applyJob(volunteer[0].id, jobId);
  };

  return (
    <>
      <SearchBar />
      <Container
        className="justify-content-center my-5"
        style={{ display: "flex" }}
      >
        <Row className="my-auto" style={{ width: "70%" }}>
          <Col>
            <Card className="border-0 text-center" id="volunteer-home">
              <ListGroup>
                {jobs.map((job) => (
                  <ListGroup.Item
                    className="mb-3"
                    key={job.id}
                    onClick={() => displayJobInfo(job.id)}
                  >
                    {job.job_position} - {job.hours_per_day} Hours per day
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card className="text-center border-0" id="volunteer-home-02">
              {jobInfo && (
                <Card.Body>
                  <>
                    <Card.Title key={jobInfo.id}>
                      {jobInfo.job_position}
                    </Card.Title>
                    <Card.Text>
                      Hours per day: {jobInfo.hours_per_day}
                    </Card.Text>
                    <Card.Text>Address: {jobInfo.address}</Card.Text>
                    <Card.Text>Description: {jobInfo.description}</Card.Text>
                    <Card.Text>Company: {jobInfo.company}</Card.Text>
                  </>
                  <Form.Group
                    as={Row}
                    className="justify-content-center mb-5 mt-2"
                  >
                    <Col xs="auto">
                      <Button
                        type="submit"
                        value="Submit"
                        variant="outline-success"
                        onClick={handleApplyJob}
                      >
                        Apply
                      </Button>
                    </Col>
                  </Form.Group>
                </Card.Body>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default VolunteerHome;
